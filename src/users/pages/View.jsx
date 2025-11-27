import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaX } from 'react-icons/fa6'

function View() {
  const[modalStatus,setModalStatus]=useState(false)

  return (
    <>
    <Header/>
    <div className="md:mt-10 m-5">
      <div className="shadow border border-gray-200 p-5">
        <div className="md:grid grid-cols-4 gap-x-10">
          {/* image */}
          <img className='w-full' src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
        
        {/* book details column */}
        <div className="col-span-3">
          <div className="flex items-center justify-between mt-5 md:mt-0">
            <h1 className="text-2xl font-black">book title</h1>
            <button className="text-geay-400"><FaEye onClick={()=>setModalStatus(true)}/></button>
          </div>
          <p className="my-3 text-blue-700"> - Autor</p>
          <div className="md:grid grid-cols-3 gap-5 my-10">
            <p className="font-bold">publisher: </p>
            <p className="font-bold">Language: </p>
            <p className="font-bold">No.of pages: </p>
            <p className="font-bold">Orginal Price: </p>
            <p className="font-bold">ISBN: </p>
            <p className="font-bold">Category: </p>
            <p className="font-bold">Seller: </p>
          </div>
          <div className="md:my-10 my-4">
            <p className="font-bold text-lg">
              Abstract 
            </p>
          </div>
          <div className="flex justify-center md:justify-end  ">
            <Link to={'/books'} className='bg-blue-700 px-4 rounded text-white flex items-center'><FaBackward className='me-2'/>Back</Link>
            <button className=' mx-2 bg-green-700 px-4 rounded text-white p-2 rounded'>Buy $ 13</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    {/* modal */}
    {
     modalStatus &&
     <div onClick={()=>setModalStatus(false)} className="relative z-10">
      <div className="bg-gray-500/75 fixed inset-0">
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white rounded md:w-250 w-100">
            {/* modal title */}
            <div className="bg-black text-white p-3 flex justify-between items-center">
              <h3>books images</h3>
              <FaX onClick={()=>setModalStatus(false)}/>
            </div>
            {/* modal-body */}
            <div className="relative p-5">
              <p className="text-blue-600 flex items-center gap-2">
              <FaCamera/>  camera clicks of the book in the hand of seller
              </p>
               {/* book image in row */}
               <div className="flex  gap-3 justify-center md:flex flex-wrap my-4 ">
                <img className='w-25 md:w-75 md:me-2 mb-3 md:mb-0' src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
                <img className='w-25 md:w-75 md:me-2 mb-3 md:mb-0' src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
                <img className='w-25 md:w-75 md:me-2 mb-3 md:mb-0' src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
    <Footer/>
    </>
  )
}

export default View