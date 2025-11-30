import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
function Edit() {
      const [offcanvasStatus,setOffcanvasstatus] =useState(false)

  return (
    <div>
      <button onClick={()=>setOffcanvasstatus(true)} className='flex items-center text-blue-600 p-2 border rounded hover:bg-blue-600 hover:text-white'> <FaEdit className='me-3' />Edit</button>
      {/* offcanvas */}
      {
        offcanvasStatus &&
        <div className="fixed inset-0 bg-gray-500/75 z-50 w-full h-full">
        <div className="bg-white h-full w-90 fixed top-0 left-0">
          {/* header */}
          <div className="bg-black p-3 flex justify-between text-white">
            <h3 className="text-xl">update profile</h3>
            <button onClick={()=>setOffcanvasstatus(false)}><FaX /></button>
          </div>
          {/* body */}
          <div className="flex justify-center items-center flex-col my-5 mb- ">
            {/* image */}
            <label htmlFor="uploadimg" className='flex flex-col '>
              <input type="file" id="uploadimg" hidden  />
              <img style={{ height: '150px', width: '150px', borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="profile" />

            </label>
            {/* name */}
            <div className="mt-10 mb-3 w-full px-5">
              <input type="text" placeholder="username" className='border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* password */}
            <div className=" mb-3 w-full px-5">
              <input type="password" placeholder="new password" className='border border-gray-200 p-2 rounded w-full' />
            </div>
            <div className=" mb-3 w-full px-5">
              <input type="password" placeholder="confirm password" className='border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* bio */}
            <div className=" mb-3 w-full px-5">
              <textarea type="text" placeholder="Bio" rows={3} className='border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* button */}
            <div className=" mb-3 px-5 flex justify-end w-full mt-5">
              <button className='px-3 py-2 rounded bg-red-600 border text-white hover:bg-white hover:text-red-600'>RESET</button>
              <button className='px-3 py-2 rounded bg-green-600 border text-white hover:bg-white hover:text-green-600 ms-5'>UPDATE</button>

            </div>
          </div>
        </div>

      </div>
      }
    </div>
  )
}

export default Edit