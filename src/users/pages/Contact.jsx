import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationDot, FaMessage, FaMillSign } from 'react-icons/fa6'
import { FaEnvelope, FaMailchimp, FaPhone, FaPhoneAlt, FaTelegram, FaTelegramPlane } from 'react-icons/fa'

function Contact() {
  return (
   <>
   <Header/>
   <div className="flex flex-col justify-center items-center mt-10 ">
    <h1 className="text-3xl mb-7">Contacts</h1>
    <p className='px-7 text-justify  md:text-center md:px-40'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate assumenda at sapiente nostrum, esse fugit eligendi itaque quia, rerum tempora tenetur sint doloremque cum consectetur nam illo explicabo suscipit dolore!adipisicing elit. Cupiditate assumenda at sapiente nostrum, esse fugit eligendi itaque quia, rerum tempora tenetur sint doloremque cum consectetur nam illo explicabo suscipit dolore!</p>
    {/* icons*/}
    <div className="flex flex-col gap-7 my-7 md:my-10 md:grid md:grid-cols-3 md:gap-40">
      <div className="flex items-center gap-1">
        <FaLocationDot className=' rounded-2xl p-2 text-4xl' style={{backgroundColor:' #D9D9D9'}}/>
        <p className='text-1xl'>123 Main Street,<br /> Apt 4B,Anytown, CA 91234</p>
      </div>
      <div className="flex items-center gap-1">
        <FaPhoneAlt className=' rounded-2xl p-2 text-4xl'style={{backgroundColor:' #D9D9D9'}}/>
        <p className='text-1xl'>4455667733</p>
      </div>
      <div className="flex items-center gap-1">
        <FaEnvelope className=' rounded-2xl p-2 text-4xl' style={{backgroundColor:' #D9D9D9'}}/>
        <p className='text-1xl'>sample@gmail.com</p>
      </div>
   {/* form and map */}
    </div>
    <div className="flex flex-col w-full mx-5  mb-7 md:grid md:grid-cols-2 md:gap-3 items-center">
      <div className="flex flex-col  items-center " >
        {/* form */}
        <div className='px-6 py-8 rounded' style={{backgroundColor:' #D9D9D9'}}>
          <h3 className="text-2xl text-black my-3 text-center">send me message</h3>
          <form className='flex flex-col gap-3 '>
            <input type="text" placeholder="username" className='w-100  border bg-white rounded py-1 border-white ' />
            <input type="text" placeholder="Email-id" className='w-100 border bg-white rounded py-1 border-white' />
            <input type="text"placeholder="message"  className='w-100 border bg-white rounded pb-23 border-white' />
            <button className='flex items-center justify-center text-white rounded  my-3 py-2 gap-1'style={{backgroundColor:'#1E2939'}}>send Message <FaTelegramPlane className='text-white' style={{backgroundColor:'#1E2939'}}/></button>
          </form>
        </div>
      </div>
      {/* map */}
      <div className="flex items-center my-3 mx-4">
        <img width={'600px'} src="/map.jpg" alt="" />
      </div>
    </div>
   </div>
   <Footer/>
   </>
  )
}

export default Contact