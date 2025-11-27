import React from 'react'
import { FaArrowRight, FaFacebook, FaHeart, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div  className="w-full flex flex-col ps-5 gap-10  items-start md:grid grid-cols-3 text-white bg-black items-center gap-4 py-10">
        <div className="flex flex-col ms-2 gap-2  ">
          <h4 className="text-2xl ">
            About Us
          </h4>
          <p className='text-justify pe-10'>We’re a cozy, independent bookstore connecting readers with stories — new, used, and hard-to-find. Friendly staff, curated picks, and community events. Come browse.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-2xl ">
            News Letter
          </h4>
          <p className='text-justify pe-5'>Get first looks, new arrivals & events. Subscribe with your email.
          </p>
          <div className="flex justify-start items-center w-full">
            <input type="text" placeholder="Email ID" className='placeholder-gray-500 border bg-white w-75 py-2' />
            <button className='text-gray-500 my-auto  bg-yellow-500 text-white ' style={{padding:'.83rem'}} >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col   gap-2">
          <h4 className="text-2xl ">Follw Us</h4>
          <p>Lets us be Social</p>
          <div className="flex justify-start items-center ">
            <FaInstagram />
            <FaTwitter className='mx-2' />
            <FaFacebook className='me-2' />
            <FaLinkedin />
          </div>
        </div>
        </div>
        <div className="text-justify md:w-full flex  justify-center items-center bg-black text-white">
          <p>copyright &copy; 2025 All rights reserved | This website is made with luminar technolab</p>
        </div>
      
      
    </>
  )
}

export default Footer