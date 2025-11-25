import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
function Home() {
  return (
    <div>
      <Header />
      <div>
        {/* landingpart-search */}
        <div style={{ height: '500px' }} className="w-full flex justify-center items-center flex-col bg-[url(/bgnew.jpg)] bg-cover bg-center">
          <div style={{ height: '500px', background: 'rgba(0,0,0,0.4)' }} className="w-full flex justify-center items-center flex-col text-white ">
            <h1 className='text-5xl font-bold mb-2 '>Wonderful Gifts</h1>
            <p>Gift your family and friend a book</p>
            {/* search */}
            <div className=" mt-5 flex ">
              <input type="text" className='bg-white rounded-2xl text-black w-100 placeholder-gray-500 p-2' placeholder="search your book here" />
              <butto className='text-gray-500 my-auto' style={{ marginLeft: "-40px" }}>
                <FaSearch />
              </butto>
            </div>
          </div>
        </div>
        {/* new arrival */}
        <section className="md: px-40 p-5 my-5 flex items-center justify-center flex-col">
          <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
          <h2 className="text-2xl ">Explore Our Latest Collections</h2>
        {/* bookrowand col */}
        </section>
        {/* author */}

        {/* testimonials */}
      </div>
      <Footer /></div>
  )
}

export default Home