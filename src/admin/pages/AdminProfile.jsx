import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import { FaPen } from 'react-icons/fa'
function AdminProfile() {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        <div className="col-span-1 ">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <div className="text-center my-5 font-bold text-3xl">settings</div>
          <div className="md:grid grid-cols-2 gap-10 ">
            {/* text */}

            <div className='mt-8'>
              <p className='text-justify'>
                <h1 className='font-bold text-2xl'>Welcome to the Admin Settings Panel</h1>

                <p className='text-justify'>
                  Welcome back, Admin! This dashboard gives you full control over the Bookstore Management System.
                  From here, you can update store information, manage books and categories, handle payments, control user access, adjust security settings, and backup or restore data.
                  Use the tools below to keep your bookstore running smoothly and efficiently.
                </p>

                <h3 className='font-bold text-xl' >⚙ Store Information</h3>

                <p>Manage the general details of your bookstore including the store name, tagline, logo, homepage layout, language, and contact details.</p>

                <p>Example: BookNest – Your Online Book Destination</p>

                <p>🔘 Update Store Details</p>

                <h3 className='font-bold text-xl'>📚 Book & Inventory Settings</h3>

                <p>
                  Control how your books are organized and maintained in the system. Configure ISBN validation, book categories, stock alerts, discounts, and auto-hide out-of-stock items.
  
                </p>
                <p>🔘 Manage Categories · Set Stock Rules</p>

                <h3 className='font-bold text-xl'>💳 Payment & Billing</h3>

                <p>
                  Configure how the bookstore collects payments. Update the payment gateway, tax percentage, billing address, and invoice format.
  
                </p>
                <p>Example: Razorpay / Stripe (Active)</p>

                

              

              
              </p>
            </div>
            {/* form */}
            <div className="flex justify-center items-center flex-col bg-blue-100  p-5 rounded">
              {/* img */}
              <label htmlFor="uploadimg" className='flex flex-col '>
              <input type="file" id="uploadimg" hidden  />
              <img style={{ height: '150px', width: '150px', borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="profile" />

            </label>
            <button style={{marginTop:'-20px'}}><FaPen className='bg-yellow-400 p-2 text-white'/></button>
             {/* name */}
            <div className="mt-10 mb-3 w-full px-5">
              <input type="text" placeholder="username" className=' bg-gray-200 border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* password */}
            <div className=" mb-3 w-full px-5">
              <input type="password" placeholder="new password" className=' border border-gray-200 p-2 rounded w-full' />
            </div>
            <div className=" mb-3 w-full px-5">
              <input type="password" placeholder="confirm password" className='bg-blue-50 border border-gray-200 p-2 rounded w-full' />
            </div>
            <div className=" mb-3   px-5 flex justify-center w-full mt-5">
              <button className='px-3 py-2 rounded bg-red-600 border text-white hover:bg-white hover:text-red-600'>RESET</button>
              <button className='px-3 py-2 rounded bg-green-600 border text-white hover:bg-white hover:text-green-600 ms-5'>UPDATE</button>

            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer /></>
  )
}

export default AdminProfile