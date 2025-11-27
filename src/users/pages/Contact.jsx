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
    </div>
    {/* form and map */}
    <div className="flex flex-col w-full mx-5  mb-7 md:grid md:grid-cols-2 md:gap-3 items-center">
      <div className="flex flex-col  items-center " >
        {/* form */}
        <div className='p-5 rounded' style={{backgroundColor:' #D9D9D9'}}>
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3928.9836562525024!2d76.343474!3d10.018207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Python%2C%20Data%20Science%2C%20AI%2C%20ASP.NET%2C%20Flutter%2C%20Software%20Testing%20Training%20Institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1764228791638!5m2!1sen!2sin" className='w-full' height="450" ></iframe>
      </div>
    </div>
   </div>
   <Footer/>
   </>
  )
}

export default Contact