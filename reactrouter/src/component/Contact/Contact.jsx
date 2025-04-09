import React from 'react'

function Contact() {
    return (
        <div className='max-w-[900px] h-auto m-auto my-36'>
            <div className='max-w-[700px] h-auto m-auto flex  '>
                <div className="text-center w-80 bg-gray-300 px-4 my-6  rounded-2xl">
                    <h1 className="text-2xl font-bold">Get in tough</h1>
                    <p className="text-gray-600">Fill in the form to start the conversation</p>
                    <div className=" w-40 text-[13px] font-bold text-gray-600 mt-4">
                        <div className="flex gap-2 mb-4 ">
                            <svg 
                                fill="gray"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round" 
                                viewBox="0 0 384 512"
                                className="w-5 h-5"
                                >
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                                />
                            </svg>
                            <div>
                                Acme Inc, Street, State, Postal Code
                            </div>
                        
                        </div>
                        <div className="flex gap-5 mb-4 ">
                            <svg 
                                fill="gray"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round" 
                                viewBox="0 0 512 512"
                                className="w-5 h-5"
                                >
                                <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"
                                />
                            </svg>
                            <div>
                                +44 1234567890
                            </div>
                        </div>
                        <div className="flex gap-5 mb-4">
                            <svg 
                                fill="gray"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 512 512"
                                className="w-5 h-5"
                                >
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>
                            <div>
                                info@acme.org
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-center ">
                    <div className="px-12">
                        <label htmlFor="name" className="hidden"> full name</label>
                        <input 
                        type="text" 
                        name="name"
                        id="name"
                        placeholder="First Name"
                        className="w-60 px-2 py-2 bg-white border border-gray-400 rounded focus:border-amber-500 font-bold outline-none mt-2"
                        
                        />
                    </div>
                    <div className="px-12">
                        <label htmlFor="email" className="hidden"> Email</label>
                        <input 
                        type="email" 
                        name="email"
                        id="Email"
                        placeholder="Email"
                        className="w-60 px-2 py-2 bg-white border border-gray-400 rounded focus:border-amber-500 font-bold outline-none mt-2"
                        
                        />
                    </div>
                    <div className="px-12">
                        <label htmlFor="name" className="hidden"> Telephone Number</label>
                        <input 
                        type="number" 
                        name="name"
                        id="name"
                        placeholder="Telephone Number"
                        className="w-60 px-2 py-2 bg-white border border-gray-400 rounded focus:border-amber-500 font-bold outline-none mt-2"
                        
                        />
                    </div>
                    <div className=" flex  my-5 ml-12">
                        <button className="bg-orange-700 py-1 px-4 rounded hover:bg-orange-600"> Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
