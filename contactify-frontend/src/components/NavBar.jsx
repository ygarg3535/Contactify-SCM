import React from 'react'
import {useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigator = useNavigate();
  function loginPage(){
    navigator("/login");
  }

  function signUpPage(){
    navigator("/register");
  }

  return (
    <div className="">
<nav className=" bg-white dark:bg-gray-800 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img width={35} src="/icons/contact-logo.png" alt="" />
      <span className="self-center text-blue-700 font-bold text-2xl whitespace-nowrap dark:text-white">Contactify</span>
  </a>
  <div className="flex md:gap-2 gap-0 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" onClick={loginPage} className="text-red-700  hover:text-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      <button type="button" onClick={signUpPage} className="text-white bg-blue-800  hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
  </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
