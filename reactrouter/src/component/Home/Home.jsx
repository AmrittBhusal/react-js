import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='max-w-[900px] h-auto m-auto mt-15'>
            <div className='flex items-center justify-between ml-20'>
                <div>
                    <img 
                        className='w-[300px] h-[300px]'
                        src="https://images.pexels.com/photos/5040775/pexels-photo-5040775.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                        alt="image1" 
                    />
                </div>
                <div className='mr-20'>
                    <h2 className='text-3xl font-bold'>
                        Download Now
                        <h1 className='text-2xl flex-col ml-15'>Lorem Ipsum</h1>
                    </h2>
                    <Link
                        className='inline-flex text-white bg-amber-700 py-3 px-4 rounded-[15px] ml-12 mt-7'
                    >
                        <svg
                            fill="black"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"       
                            >
                            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        &nbsp; Download now
                    </Link>
                </div>
            </div>
            <div className='w-full flex items-center justify-center py-20'>
                <img className='w-60 rounded-2xl  ' src="https://assets.grok.com/users/0dc2cc4c-087f-4fde-868a-153837f61b9b/generated/CFXm267QE6rMAb2f/image.jpg   " alt="image2" />
            </div>
        </div>
    )
}

export default Home
