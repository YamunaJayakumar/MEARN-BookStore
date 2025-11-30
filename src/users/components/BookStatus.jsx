import React from 'react'

function BookStatus() {
    return (
        <div className='shadow p-10 my-20 mx-5 rounded'>
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
                            <img  width={'120px'} src="https://static.vecteezy.com/system/resources/previews/022/411/806/non_2x/pending-rubber-stamp-red-pending-rubber-grunge-stamp-seal-illustration-vector.jpg" alt="pending" />
                            {/* approved*/}
                             <img  width={'120px'} src="https://e7.pngegg.com/pngimages/192/283/png-clipart-approved-approved.png" alt="pending" />
                            {/* sold */}
                             <img  width={'120px'} src="https://png.pngtree.com/png-clipart/20230804/original/pngtree-sold-out-blue-stamp-vintage-illustration-icon-vector-picture-image_9553983.png" alt="pending" />
                        </div>
                    </div>
                   <div className='px-4 mt-4 md:mt-0 flex flex-col  '>
                        <img className='w-50' src="https://m.media-amazon.com/images/I/91ZUvoslh1L._UF1000,1000_QL80_.jpg" alt="book" />
                        <div className='flex justify-end '><button className='p-2 bg-red-600 text-white mt-5'>Delete</button></div>
                    </div>

                </div>
                 
            </div>
        </div>
    )
}

export default BookStatus