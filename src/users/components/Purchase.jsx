import React from 'react'

function Purchase() {
  return (
    <div className='shadow p-10 my-10 mx-5 rounded'>
            {/* book div  */}
            <div className="bg-gray-200 p-5 rounded">
                <div className="md:grid grid-cols-[3fr_1fr]">
                    <div>
                        <h2 className="text-2xl">Title</h2>
                        <h3 className="text-xl">Author</h3>
                        <h4 className="text-lg text-red-500">$400</h4>
                        <p className='text-justify'>Abstract</p>
                        <div className="flex mt-5">
                            {/* pending */}
                            <img  width={'160px'} src="https://static.vecteezy.com/system/resources/thumbnails/023/629/698/small/web-button-icon-purchase-button-free-png.png" alt="purchase" />
                            
                        </div>
                    </div>
                    <div className='px-4 mt-4 md:mt-0'>
                        <img className='w-75' src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
                       
                    </div>

                </div>

            </div>
        </div>
  )
}

export default Purchase