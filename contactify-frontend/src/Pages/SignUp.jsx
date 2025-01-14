import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import * as Yup from 'yup'
import { Helmet, HelmetProvider } from "react-helmet-async";
const SignUp = () => {

  const navigator = useNavigate();
  const [errors,setErrors] = useState({})

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        city: '',
        about: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the register method from UserService
            await validationSchema.validate(formData, {abortEarly: false});
            const token = localStorage.getItem('token');
            await UserService.register(formData, token);

            // Clear the form fields after successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
                phoneNumber: '',
                city: '',
                about: ''
            });
            alert('User registered successfully');
            navigator('/login');

        } catch (error) {
            const newErrors = {}

            error.inner.forEach(err=>{
              newErrors[err.path] = err.message;
            });

            setErrors(newErrors);
        }
    };

    const validationSchema = Yup.object({
      name: Yup.string().required("Name is Required"),
      email: Yup.string().required("Email is Required").email("Invalid email format"),
      password: Yup.string().required("Password is Required").min(8,"Password must be at least 8 characters").matches(/[!@#$%^&*(),.?:{}|<>]/,"Password must contain at least one symbol").matches(/[0-9]/,"Password must contain at least one number").matches(/[a-z]/,"Password must contain at least one lowercase letter").matches(/[A-Z]/,"Password must contain at least one uppercase letter"),
      phoneNumber: Yup.string().matches(/^\d{10}$/,"Phone Number must be 10 digits").required("Phone Number is Required"),
      city: Yup.string().required("City is Required"),
      about: Yup.string().required("About is Required")
    })

  return (
    <HelmetProvider>
      <div className="">
      <Helmet>
          <title>Sign Up - Contactify</title>
        </Helmet>
      <div><NavBar/></div>
      <div className="grid grid-cols-12 bg-gray-50 dark:bg-gray-800">
        <div className="col-span-4 md:col-span-2 lg:col-span-3 xl:col-span-4"></div>
        <div className="col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-4 md:mt-2">
          <div className="block p-6 md:bg-white md:border-t-8 md:border-blue-700 md:rounded-lg md:shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-blue-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SignUp Here
            </h5>
            <p className="font-normal text-gray-400 dark:text-gray-400">
              Start managing contacts on cloud...
            </p>

            <form action="" className="mt-5" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <div className="text-red-600 text-sm">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <div className="text-red-600 text-sm">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && <div className="text-red-600 text-sm">{errors.password}</div>}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                {errors.phoneNumber && <div className="text-red-600 text-sm">{errors.phoneNumber}</div>}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  type="text"
                  id="text"
                  name="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Here..."
                  value={formData.city}
                  onChange={handleInputChange}
                />
                {errors.city && <div className="text-red-600 text-sm">{errors.city}</div>}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="about"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Write something about yourself...
                </label>
                <textarea
                  id="about"
                  name="about"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write here..."
                  value={formData.about}
                  onChange={handleInputChange}
                ></textarea>
                {errors.about && <div className="text-red-600 text-sm">{errors.about}</div>}
              </div>
              <div className="md:mb-3 ">
                <button className="px-3 w-full py-2 rounded bg-gray-800 text-white hover:bg-gray-900 dark:bg-blue-700 dark:hover:bg-blue-800 ">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default SignUp;
