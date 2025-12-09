import React, { useEffect, useState } from 'react'
import { FaAddressCard, FaBars, FaFacebook, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import { FaPowerOff } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function Header() {
  const [listStatus, setListStatus] = useState(false)
  const [dp, setDp] = useState("")
  const [token, setToken] = useState('')
  const [dropDown, setDropDown] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      const user = JSON.parse(sessionStorage.getItem("user"))
      console.log(user)
      // setDp(user.profilepic)
    }
  }, [token])


  const menuBtnClcik = () => {
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
          {/* login btn- */}
          {
            !token ? <Link to={'/login'} className='ms-4 border rounded px-2 py-1 flex items-center hover:bg-black hover:text-white'><FaUser />login</Link>
              : <div className='relative inline-block text-left ms-2'>
                <button onClick={() => setDropDown(!dropDown)} className='w-full bg-white px-3 py-3 shadow-xs hover:bg-gray-50'>
                  <img width={'40px'} height={'40px'} style={{ borderRadius: "50%" }} src="https://static.vecteezy.com/system/resources/previews/025/869/648/non_2x/monochrome-woman-avatar-silhouette-user-icon-in-trendy-flat-design-free-vector.jpg" alt="" />
                </button>
                {
                  dropDown && <div className="absolute   right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg orgin-top-right ring-1 ring-black/5 focus:outline-hidden">
                    <Link to={'/user/profile'} className='blcok flex px-4 py-2 text-sm text-gray-700 items-center'><FaAddressCard className='me-2' />Profile</Link>
                    <button className='block flex  px-4 py-2 text-sm text-gray-700 items-center '><FaPowerOff className='me-2' />Logout</button>
                  </div>
                }

              </div>
          }
        </div>

      </div>
      {/* header lower part-links menu +login */}
      <nav className="w-full p-2 bg-black text-light md:flex  justify-center items-center">
        {/* div-menu-bar=login */}
        <div className="flex items-center justify-between text-2xl text-white md:hidden ">
          {/* menubar */}
          <button onClick={menuBtnClcik}><FaBars /></button>
          {/* loginlink */}
          {
            !token ?
              <Link to={'/login'} className='ms-4 border rounded px-2 py-1 flex items-center hover:bg-black hover:text-white'><FaUser />login</Link>
              : <div className='relative inline-block text-left ms-2'>
                <button onClick={() => setDropDown(!dropDown)} className='w-full bg-white px-3 py-3 shadow-xs hover:bg-gray-50'>
                  <img width={'40px'} height={'40px'} style={{ borderRadius: "50%" }} src="" alt="" />
                  </button>
                  {
                    dropDown && <div className="absoulte right-0z-10 mt-2 w-40 rounded-md bg-white shadow-lg orgin-top-right ring-1 ">
                      <Link to={'/user/profile'}>PROFILE</Link>
                      <button>LOgout</button>
                    </div>
                  }
                
              </div>
          }
          <Link to={'/login'} className='ms-4 border rounded px-2 py-1 hover:bg-white hover:text-black flex items-center'>
            <FaUser className='me-1' />login</Link>

        </div>
        {/* ui-links */}
        <ul className={listStatus ? "flex flex-col text-white" : " text-white md:flex  justify-center items-center hidden"}>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'} >HOME</Link></li>
          <li className='md:mx-4 my-4 md:my-0'><Link to={'/books'}>BOOKS</Link></li>
          <li className=' md:mx-4 mb-3 md:mb-0'><Link to={'/contact'} >CONTACT</Link></li>
        </ul>

      </nav>
    </>
  )
}

export default Header