import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Header />
      <div>
        {/* landingpart-search */}
        <div style={{ height: '600px' }} className="w-full flex justify-center items-center flex-col bg-[url(/bg.jpeg)] bg-cover bg-center">
          <div style={{ height: '600px', background: 'rgba(0,0,0,0.4)' }} className="w-full flex justify-center items-center flex-col text-white ">
            <h1 className='text-5xl font-bold mb-2 '>Wonderful Gifts</h1>
            <p>Gift your family and friend a book</p>
            {/* search */}
            <div className=" mt-5 flex ">
              <input type="text" className='bg-white rounded-2xl text-black w-100 placeholder-gray-500 p-2' placeholder="search your book here" />
              <button className='text-gray-500 my-auto' style={{ marginLeft: "-40px" }}>
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
        {/* new arrival */}
        <section className="  md:px-40 p-5 my-5 flex items-center justify-center flex-col mt-10">
          <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
          <h2 className="text-2xl ">Explore Our Latest Collections</h2>
          
          <div className=" md:grid grid-cols-4 w-full mt-10 ">
            {/* book rowand col */}
            <div className="shadow rounded p-3 mx-4 flex flex-col items-center mb-3 md:mb-0">
              <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
              <div className="flex  flex-col mt-4 justify-center items-center">
                <h3 className='text-blue-300 font-bold text-lg'>Autor</h3>
                <h4 className="text-lg">title</h4>
                <h4>$ price</h4>
              </div>
              
            </div>
            {/* duplicate row and cols */}
            <div className="shadow rounded p-3 mx-4 flex flex-col items-center mb-3 md:mb-0">
              <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
              <div className="flex  flex-col mt-4 justify-center items-center">
                <h3 className='text-blue-300 font-bold text-lg'>Autor</h3>
                <h4 className="text-lg">title</h4>
                <h4>$ price</h4>
              </div>
              
            </div>
            <div className="shadow rounded p-3 mx-4 flex flex-col items-center mb-3 md:mb-0 ">
              <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
              <div className="flex  flex-col mt-4 justify-center items-center">
                <h3 className='text-blue-300 font-bold text-lg'>Autor</h3>
                <h4 className="text-lg">title</h4>
                <h4>$ price</h4>
              </div>
            </div>
            <div className="shadow rounded p-3 mx-4 flex flex-col items-center mb-3 md:mb-0 ">
              <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
              <div className="flex  flex-col mt-4 justify-center items-center">
                <h3 className='text-blue-300 font-bold text-lg'>Autor</h3>
                <h4 className="text-lg">title</h4>
                <h4>$ price</h4>
              </div>
            </div>
          </div>
          {/* all books link */}
          <div className="text-center mt-10">
            <Link to={'/books'} className='px-3 py-2 bg-blue-800'>Explore more...</Link>
          </div>
        </section>
        {/* author */}
        <section className=" md:grid grid-cols-2 items-center gap-10 md:px-40 p-5 my-5">
            {/* autorcontetnt */}
            <div className='text-center '>
              <h1 className="text-3xl font-bold">FEATURED AUTOR</h1>
              <h2 className="text-2xl ">Captivate with every words</h2>
              <p className='text-justify mt-9'>Driven by a love for storytelling and curiosity about the world, the author believes that words have the power to connect people, heal hearts, and spark imagination. Every story written is a reflection of lived experiences, silent emotions, and the small moments of life that often go unnoticed.
                 from heartfelt fiction to thoughtful reflections and inspiring themes. The goal of every work is simple: to make the reader feel something and leave a lasting impression long after the last page is turned.
               </p>
               <p className='text-justify mt-4' > When not writing, the author can be found reading, observing people, or wandering through nature for inspiration. The journey of writing is ongoing, and each book or blog is a step toward learning, growing, and touching more lives.

                Thank you for being a part of this journey. Your time, support, and love for reading make every word worthwhile.</p>
                <p className='text-justify mt-4' > When not writing, the author can be found reading, observing people, or wandering through Your time, support, and love for reading make every word worthwhile</p>
            </div>
            {/* autor img */}
            <div className="p-5 flex justify-center items-center">
              <img className='w-100' src="https://i.pinimg.com/originals/d7/37/94/d737946d153beb56555ed95ab0af1ee1.jpg" alt="" />
            </div>
        
        </section>
        {/* testimonials */}
        <section className="md:px-40 p-5 my-5 flex items-center justify-center flex-col mt-10">
          <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
          <h2 className="text-2xl ">See what thers are saying</h2>
          <div className="my-5 flex flex-col items-center justify-center">
            {/* user img */}
            <img width={'200px'} height={'200px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="" />
            {/* feedback */}
            <p className=' mt-5'>Jhon Doe</p>
            <p className='text-justify mt-4'>"<span className='font-bold me-2'>I was surprised by the quality</span>! The book looked almost new, and the price was unbelievably low. Buying second-hand here feels smart, affordable, and satisfying. I’ll definitely order again.This store has completely changed my view on used books. Every book I received was clean, well-maintained, and carefully packed. It’s the best place for budget-friendly reading without compromising quality."</p>
          </div>
        </section>
      </div>
      <Footer /></div>
  )
}

export default Home