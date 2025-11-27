import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Book() {

  const [showCategoryList, setShowCategoryList] = useState(false)

  return (
    <>
      <Header />
      {/* login -book page */}
      <>
        {/* title and search book */}
        <div className="flex items-center flex-col justify-center my-5">
          {/* bookstore */}
          <h1 className="text-3xl font-bold my-5">All Books</h1>
          {/* searchbox */}
          <div className="flex my-5">
            <input type="text" placeholder="search by title" className='border p-2 border-gray-400 w-100 ' />
            <button className="bg-black text-white p-2">search</button>
          </div>
        </div>
        {/* book and filter row */}
        <div className='md:grid grid-cols-4 md:px-20 p-5 mb-10'>
          {/* filter */}
          <div className="col-span-1">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semi-bold">Filter</h1>
              <button onClick={() => setShowCategoryList(!showCategoryList)} className="text-2xl md:hidden"><FaBars /></button>
            </div>
            {/* filter option */}
            <div className={showCategoryList ? "block" : "md:block hidden"}>

              {/* category-1 */}
              <div className="mt-3 ">
                <input type="radio" name="filter" id="all" />
                <label htmlFor="all" className="ms-3 ">All</label>
              </div>

              {/* book category */}
              <div className="mt-3 ">
                <input type="radio" name="filter" id="demo" />
                <label htmlFor="demo" className="ms-3 ">category name</label>
              </div>
            </div>
          </div>
          {/* bookrow */}
          <div className="col-span-3">
            <div className="md:grid grid-cols-4 mt-5 md:mt-0">
              {/* book card-div 1*/}
              <div className="shadow rounded p-3 mx-4 flex flex-col items-center mb-3 md:mb-0">
                <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
                <div className="flex  flex-col mt-4 justify-center items-center">
                  <h3 className='text-blue-300 font-bold text-lg'>Autor</h3>
                  <h4 className="text-lg">title</h4>
                  <Link to={`/books/id/view`} className="bg-black p-2 mt-2 text-white py-2 px-4">View</Link>
                </div>
              </div>
              {/* book card-div 1*/}

              <div className="shadow rounded p-3 mx-4 flex flex-col items-center mb-3 md:mb-0">
                <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
                <div className="flex  flex-col mt-4 justify-center items-center">
                  <h3 className='text-blue-300 font-bold text-lg'>Autor</h3>
                  <h4 className="text-lg">title</h4>
                  <Link to={`/books/id/view`} className="bg-black p-2 mt-2 text-white py-2 px-4">View</Link>
                </div>
              </div>
             {/* book card-div 1*/}
              <div className="shadow rounded p-3 mx-4 flex flex-col items-center mb-3 md:mb-0">
                <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
                <div className="flex  flex-col mt-4 justify-center items-center">
                  <h3 className='text-blue-300 font-bold text-lg'>Autor</h3>
                  <h4 className="text-lg">title</h4>
                  <Link to={`/books/id/view`} className="bg-black p-2 mt-2 text-white py-2 px-4">View</Link>
                </div>
              </div>
              {/* book card-div 1*/}
              <div className="shadow rounded p-3 mx-4 flex flex-col items-center mb-3 md:mb-0">
                <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
                <div className="flex  flex-col mt-4 justify-center items-center">
                  <h3 className='text-blue-300 font-bold text-lg'>Autor</h3>
                  <h4 className="text-lg">title</h4>
                  <Link to={`/books/id/view`} className="bg-black p-2 mt-2 text-white py-2 px-4">View</Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </>
      {/* not login-book page */}
      <Footer />
    </>
  )
}

export default Book