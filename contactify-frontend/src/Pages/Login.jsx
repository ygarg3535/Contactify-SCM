import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigator = useNavigate();

  const handleSubmit=async(e)=>{
      e.preventDefault();

      try {
        const userData = await UserService.login(email,password)
        if (userData.token) {
          localStorage.setItem('token',userData.token)
          navigator("/user/dashboard")
        }
        else{
          console.log(error);
        }
      } catch (error) {
        toast.error("Incorrect email or password",{
          position : "top-center",
          autoClose : 3000
        })
      }
  }

  return (
    <HelmetProvider>
      <div>
      <Helmet>
          <title>Login - Contactify</title>
        </Helmet>
      <div><NavBar/></div>
      <ToastContainer/>
      <div className="grid grid-cols-12 bg-gray-50 base dark:bg-gray-800">
        <div className="col-span-4 md:col-span-2 lg:col-span-3 xl:col-span-4"></div>
        <div className="col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-4  md:mt-20">
          <div className="block p-6 bg-white border-t-8 border-blue-700 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-blue-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Login Here
            </h5>
            <p className="font-normal text-gray-400 dark:text-gray-400">
              Start managing contacts on cloud...
            </p>
            <form action="" className="mt-5" onSubmit={handleSubmit}>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Email"
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Password"
                  required
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button className="px-3 w-full py-2 rounded bg-blue-900 text-white hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-800 ">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
  )
}

export default Login
