import React from 'react'
import { FaBookReader, FaChartBar } from 'react-icons/fa'
import { FaGears } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit md:flex flex-col text-center '>
      {/* admin img */}
      <div className='flex items-center justify-center my-10'>
        <img style={{ height: '100px', width: '100px', borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="profile" />

      </div>
      {/* name */}
      <h1 className="text-xl font-bold mb-5">name</h1>
      {/* links */}
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="mb-3">
          <Link to={'/admin/home'} className='flex items-center'> <FaChartBar className='me-2'/>DashBoard</Link>
          
        </div>
        <div className="mb-3">
          <Link to={'/admin/resources'} className='flex items-center'> <FaBookReader className='me-2'/>Resources</Link>
          
        </div>
        <div className="mb-3">
          <Link to={'/admin/profile'} className='flex items-center'> <FaGears className='me-2'/>settings</Link>
          
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar