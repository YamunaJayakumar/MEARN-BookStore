import React, { useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
function AdminCollection() {
  const [tab,setTab]=useState(1)
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        <div className="col-span-1 ">
          <AdminSidebar />
        </div>
        <div className="span-col-4 p-10">
          <h1 className="my-5 text-center text-3xl font-bold">All Collections</h1>
          {/* tabs */}
          <div className="my-10 flex items-center justify-center">
            <p onClick={()=>setTab(1)} className={tab == 1 ? "font-bold border-gray-200 text-xl border-t border-l border-r p-3 text-blue-600 cursor-pointer" : "border-b font-bold border-gray-200 text-xl p-3"}>Books</p>
            <p  onClick={()=>setTab(2)} className={tab == 2 ? "font-bold border-gray-200 text-xl border-t border-l border-r p-3 text-blue-600 cursor-pointer" : "border-b font-bold border-gray-200 text-xl p-3"}>Users</p>


          </div>
          {/* tabcontent */}
          {
            tab==1 &&
            <div className='md:grid grid-cols-4 w-full p-4'>
              <div className="shadow rounded p-3 mx-4 flex flex-col items-center mb-3 md:mb-0">
              <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
              <div className="flex  flex-col mt-4 justify-center items-center">
                <h3 className='text-blue-300 font-bold text-lg'>Autor</h3>
                <h4 className="text-lg">title</h4>
                <h4>$ price</h4>
                <div className="grid mt-3">
                  <button className="bg-green-600 p-2 text-white">APPROVE</button>
                </div>
              </div>
            </div>

            </div>
          }
          {
            tab==2 &&

            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate user cards */}
              <div className="rounded bg-gray-200 p-3 m-2 text-wrap">
                <p className="text-red-600 font-bold text-wrap">
                  ID:dr3ri3o9908
                </p>
                <div className="flex justify-between text-wrap mt-2">
                  {/* uerimg */}
        <img style={{ height: '80px', width: '80px', borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="profile" />
                {/* content */}
                <div className="ms-5">
                  <h4 className="font-bold text-2xl text-blue-800">name</h4>
                  <p>demo@gmail.com</p>
                </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <Footer /></>
  )
}

export default AdminCollection