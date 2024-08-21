import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import UserService from "../../services/UserService";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState([]);

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const fetchProfileInfo = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
      const response = await UserService.getYourProfile(token);
      setProfileInfo(response);
    } catch (error) {
      console.error("Error fetching profile information:", error);
    }
  };

  return (
    <HelmetProvider>
      <div>
      <Helmet>
          <title>Profile - Contactify</title>
        </Helmet>
      <div>
        <SideBar />
      </div>
      <div className="pl-10 md:pl-80 grid grid-cols-12 bg-gray-50 h-screen dark:bg-gray-800">
        <div className="col-span-4 md:col-span-2 lg:col-span-3 xl:col-span-3"></div>
        <div className="col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-6 md:mt-24">
          <div className="md:pt-10 max-w-lg md:border md:border-gray-200 md:rounded-lg md:shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/icons/profile.jpg"
                alt=""
              />
              <h5 className="mb-1 text-3xl font-mono font-medium text-gray-900 dark:text-white">
                Hello, I am
              </h5>
              <h5 className="mb-1 text-2xl font-mono font-bold text-gray-900 dark:text-white">
                {profileInfo.name}
              </h5>
              <table className="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-8 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      User Email
                    </th>
                    <td className="px-6 py-4 text-center font-medium">
                      {profileInfo.email}
                    </td>
                  </tr>
                  <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-8 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Phone Number
                    </th>
                    <td className="px-6 py-4 text-center font-medium">
                      {profileInfo.phoneNumber}
                    </td>
                  </tr>
                  <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-8 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      City
                    </th>
                    <td className="px-6 py-4 text-center font-medium">
                      {profileInfo.city}
                    </td>
                  </tr>
                  <tr className=" dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-8 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      About
                    </th>
                    <td className="px-6 text-center font-medium">
                      {profileInfo.about}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default Profile;
