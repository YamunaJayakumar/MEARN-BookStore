import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
Link

function Header() {
  const [listStatus, setListStatus] = useState(false)
  const menuBtnClcik=()=>{
    setListStatus(!listStatus)
  }
  return (
    <>
      {/*Header upperpart- title &login */}
      <div className="grid grid-cols-3 p-3">
        {/* logo with title */}
        <div className='flex items-center'>
          <img width={'60px'} height={'60px'} src="https://icon-library.com/images/books-icon/books-icon-1.jpg" alt="logo" />
          <h1 className="text-2xl font-bold ms-1 md:hidden">BOOKSTORE</h1>
        </div>
        {/* title */}
        <div className='md:flex items-center justify-center hidden'>
          <h1 className='text-3xl font-bold'>BOOKSTORE</h1>
        </div>
        {/* login */}
        <div className='md:flex items-center justify-end hidden'>
          <FaInstagram />
          <FaFacebook className='mx-2' />
          <FaTwitter />
          <Link to={'/login'} className='ms-4 border rounded px-2 py-1 flex items-center hover:bg-black hover:text-white'><FaUser />login</Link>

        </div>

      </div>
      {/* header lower part-links menu +login */}
      <nav className="w-full p-2 bg-black text-light md:flex items-center justify-center items-center">
        {/* div-menu-bar=login */}
        <div className="flex items-center justify-between text-2xl text-white md:hidden ">
          {/* menubar */}
          <button onClick={menuBtnClcik}><FaBars /></button>
          {/* loginlink */}
          <Link to={'/login'} className='ms-4 border rounded px-2 py-1 hover:bg-white hover:text-black flex items-center'>
            <FaUser className='me-1' />login</Link>

        </div>
        {/* ui-links */}
        <ul className={listStatus?"flex flex-col text-white":" text-white md:flex items-center justify-center items-center hidden"}>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'} >HOME</Link></li>
          <li  className='md:mx-4 my-4 md:my-0'><Link to={'/books'}>BOOKS</Link></li>
          <li className=' md:mx-4 mb-3 md:mb-0'><Link to={'/contact'} >CONTACT</Link></li>
        </ul>

      </nav>
    </>
  )
}

export default Header