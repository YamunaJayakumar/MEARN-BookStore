import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div> 
      <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <img width={"500px"} src={'/original-78d5a175341b5698c5e82e902ff801a6 1.jpg'} alt="" />
      <p>oh No !</p>
      <h3 className="text-4xl font-bold my-2">Looks Like You're Lost</h3>
      <p>the page you are looking for is not available</p>
      <Link to={'/'} className='px-3 border py-1 bg-blue-500 text-white my-2'>BACK HOME</Link>
    </div>
    </div>
  )
}

export default Pnf