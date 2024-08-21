import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import ContactService from "../../services/ContactService";
import { Dialog } from "@material-tailwind/react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [contactDetail, setContactDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = async (id) => {
    try {
      setOpen(!open);
      const response = await ContactService.getContactsById(id);
      setContactDetail(response);
    } catch (error) {
      console.clear(error)
    }
  };

  useEffect(() => {
    listOfContacts();
  }, []);

  const listOfContacts = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await ContactService.getContacts(token);
      setContacts(response);
    } catch (error) {
      console.error("Error fetching contact information:", error);
    }
  };

  const deleteButton = async (id) => {
    try {
      await ContactService.deleteContact(id);
      listOfContacts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <HelmetProvider>
      <div>
      <Helmet>
          <title>Contacts - Contactify</title>
        </Helmet>
      <div>
        <SideBar />
      </div>
      <div className="pl-8 md:pl-64">
        <h1 className="md:text-4xl text-3xl mt-10 font-bold text-center">
          All Your Contacts
        </h1>
        <p className="text-xl text-center">List of all contacts...</p>
        <div className="contacts_container p-5">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-200">
            <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-sm text-center text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Contact Name
                  </th>
                  <th scope="col" className="w-72 px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="w-60 px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="w-60 px-6 py-3">
                    Links
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr
                    className="bg-white text-sm border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={contact.id}
                  >
                    <td className="font-semibold px-6 py-4">{contact.name}</td>
                    <td className="font-semibold px-6 py-4">{contact.email}</td>
                    <td className="font-semibold px-6 py-4">
                      {contact.phoneNumber}
                    </td>
                    <td className="flex items-center space-x-2 justify-center font-semibold px-6 py-4">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                      <a href={contact.websiteLink} target="_blank">
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                        >
                          <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                        </svg>
                      </a>
                      <a href={contact.linkedinLink} target="_blank">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="512"
                          height="512"
                          viewBox="0 0 512 512"
                          id="linkedin"
                        >
                          <path
                            fillRule="evenodd"
                            d="M182.8 384V212.9h-54.9V384h54.9zm-25.4-197c18.3 0 29.7-13.1 29.7-29.5-.3-16.7-11.4-29.5-29.4-29.5S128 140.8 128 157.5c0 16.4 11.4 29.5 29 29.5h.4zM320.6 209c-29.1 0-41.6 16.4-49.6 27.8V213h-55v171h55v-97.4c0-5 .4-10 1.9-13.5 4-10 13-20.3 28.2-20.3 19.9 0 27.9 15.3 27.9 37.7V384h55v-99.9c0-51.3-27.2-75.1-63.4-75.1z"
                            clipRule="evenodd"
                          ></path>
                          <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM414 416H99.1c-1.8 0-3.1-1.4-3.1-3.1V98c0-1.1 1-2 2-2h316c1 0 2 1 2 2v316c0 .9-.9 2-2 2z"></path>
                        </svg>
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-4 items-center justify-center cursor-pointer">
                        <div>
                          <svg
                            onClick={() => deleteButton(contact.id)}
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                          </svg>
                        </div>
                        <div>
                          <div
                            onClick={() => handleOpen(contact.id)}
                            className=""
                          >
                            <svg
                            className="w-6 h-6"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              id="eye"
                            >
                              <g>
                                <g>
                                  <rect
                                   
                                    opacity="0"
                                  ></rect>
                                  <path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z"></path>
                                  <path d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"></path>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <Dialog 
                            open={open}
                            handler={handleOpen}
                            className=" ml-10 md:ml-64"
                          >
                            <div className="grid grid-cols-12 bg-gray-50 h-screen  dark:bg-gray-800">
                              <div className="col-span-4 md:col-span-2 lg:col-span-3 xl:col-span-3"></div>
                              <div className="col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-6 md:mt-12">
                                <div className="pt-10 max-w-lg md:border md:border-gray-200 md:rounded-lg md:shadow dark:bg-gray-800 dark:border-gray-700">
                                  <div className="flex pr-10 md:pr-1 flex-col items-center pb-10">
                                    <img
                                      className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                      src="/icons/profile.jpg"
                                      alt=""
                                    />
                                    <h5 className="mb-1 text-2xl font-mono font-bold text-gray-900 dark:text-white">
                                      {contactDetail.name}
                                    </h5>
                                    <table className="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                      <tbody>
                                        <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                                          <th
                                            scope="row"
                                            className="md:px-6 px-3 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                            Email
                                          </th>
                                          <td className="px-6 py-4 text-center font-medium">
                                            {contactDetail.email}
                                          </td>
                                        </tr>
                                        <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                                          <th
                                            scope="row"
                                            className="px-3 md:px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                            Phone Number
                                          </th>
                                          <td className="px-6 py-4 text-center font-medium">
                                            {contactDetail.phoneNumber}
                                          </td>
                                        </tr>
                                        <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                                          <th
                                            scope="row"
                                            className="px-3 md:px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                            Address
                                          </th>
                                          <td className="px-6 py-4 text-center font-medium">
                                            {contactDetail.address}
                                          </td>
                                        </tr>
                                        <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                                          <th
                                            scope="row"
                                            className="px-3 md:px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                            City
                                          </th>
                                          <td className="px-6 py-4 text-center font-medium">
                                            {contactDetail.city}
                                          </td>
                                        </tr>
                                        <tr className="border-b dark:bg-gray-800">
                                          <th
                                            scope="row"
                                            className="px-3 md:px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                            Description
                                          </th>
                                          <td className="px-6 text-center font-medium">
                                            {contactDetail.description}
                                          </td>
                                        </tr>
                                        <tr className="border-b dark:bg-gray-800">
                                          <th
                                            scope="row"
                                            className="px-3 md:px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                            Website Link
                                          </th>
                                          <td className="px-6 text-center font-medium">
                                            {contactDetail.websiteLink}
                                          </td>
                                        </tr>
                                        <tr className=" dark:bg-gray-800">
                                          <th
                                            scope="row"
                                            className="px-3 md:px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                            Linkedin Link
                                          </th>
                                          <td className="px-6 text-center font-medium">
                                            {contactDetail.linkedinLink}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Dialog>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default Contacts;
