import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    
    <>
    {/* header upperpart */}
        <div className="flex justify-between items-center p-3 md:px-20">
          {/* logo with title */}
           <div className='flex items-center'>
          <img width={'80px'} height={'80px'} src="https://icon-library.com/images/books-icon/books-icon-1.jpg" alt="logo" />
          <h1 className="text-2xl  font-bold  ">BOOKSTORE</h1>
        </div>
          {/* logout */}
          <button className='bg-black py-2 px-3 rounded border  flex items-center text-white hover:bg-white hover:text-white'><FaPowerOff className='me-2'/>LOGOUT</button>
        </div>
        {/* header lower part */}
        <div className="bg-black p-2">
        <marquee>
          <p className='text-white'>Welcome Admin,you are all set to manage and monitor the system.Let's get into work !</p>
        </marquee>
        </div>
        

    </>
    
  )
} 

export default AdminHeader