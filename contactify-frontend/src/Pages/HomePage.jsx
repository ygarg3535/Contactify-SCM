import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const HomePage = () => {
  const navigator = useNavigate();
  function signUpPage(){
      navigator("/register");
  }
  function loginPage(){
    navigator("/login");
  }
  return (
    <HelmetProvider>
      <div>
      <Helmet>
          <title>Contactify : Smart Contact Manager</title>
        </Helmet>
      <div>
        <img className='w-screen h-screen absolute' src="/icons/bg.png" alt="" />
        <a className="pl-6 md:pl-32 pt-5 absolute flex cursor-pointer items-center space-x-1 md:space-x-2">
      <img width={35} src="/icons/contact-logo.png" alt="" />
      <span className=" text-blue-700 font-bold text-2xl whitespace-nowrap dark:text-white">Contactify</span>
        </a>
        <div className="flex pr-8 md:pr-32 pt-5 end-0 gap-1 md:gap-2 md:space-x-3 absolute">
      <button type="button" onClick={loginPage} className="text-black bg-white border border-black hover:text-white hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      <button type="button" onClick={signUpPage} className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
       </div>
        <div className='font-bold text-3xl px-10 md:text-5xl md:px-52 md:py-64 pt-60 text-center'>
          <p className=''>Get a comprehensive database for<br />
          effortlessly storing, updating and accessing<br />
          your contacts<br /></p>
          <div className='relative'>
          <button type="button" onClick={signUpPage} className="text-white mt-6 md:mt-0 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up Now</button>
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
  )
}

export default HomePage
