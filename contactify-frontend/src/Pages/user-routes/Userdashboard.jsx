
import React from 'react'
import SideBar from '../../components/SideBar'
import { useNavigate } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Userdashboard = () => {
  const navigator = useNavigate();

  const addContact=()=>{
    navigator("/user/add-contact")
  }
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Dashboard - Contactify</title>
        </Helmet>
        <div>
            <SideBar/>
        </div>
        <div className='bg-gray-50 pt-14 h-screen'>
        <div className='flex pl-8 md:pl-40 items-center justify-center'>
          <img width={350} src="/icons/contact-logo.png" alt="" />
        </div>
        <div className='text-center pl-12 md:pl-44 font-semibold italic text-2xl '>
          <p>Start storing and securing your contacts with us on cloud......</p>
        </div>
        <div className='text-center pl-12 md:pl-44 pt-10'>
        <button onClick={addContact} type="button" className="text-white bg-blue-700  hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start Adding Contacts</button>
        </div>
        </div>
        
    </div>
    </HelmetProvider>
  )
}

export default Userdashboard
