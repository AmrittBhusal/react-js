import React from 'react'
import {Link, NavLink} from 'react-router-dom'


export default function Footer() {
    return (
        <footer className='w-full h-auto mt-9 mb-10'>
            <div className='max-w-[900px] h-auto m-auto bg-gray-50 shadow-2xs flex-col items-center justify-between
                border-gray-300'>
                <div className='w-full h-auto bg-gray-50  flex items-center justify-between'>
                    <div>
                        <Link 
                            to="/">
                            <img 
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" 
                                alt="Logo" 
                                className='h-16'
                            />
                        </Link>
                    </div>
                    <div className='flex gap-16 mr-16'>
                        <div className='text-center font-bold '>
                            <p className='text-[11px] mb-3'>RESOURCES</p>
                            <ul>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={
                                            ({isActive})=> `${isActive? "text-orange-600 border-b": "text-gray-400"}
                                            text-[13px] font-bold`
                                            }>
                                        Home
                                    </NavLink>
                                </li>
                                <li className='mt-3'>
                                    <NavLink
                                        to="/about"
                                        className={
                                            ({isActive})=> `${isActive? "text-orange-600 border-b": "text-gray-400"}
                                            text-[13px] font-bold`
                                            }>
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div  className='text-center font-bold'>
                            <p className='text-[11px] mb-3'>FOLLOW US</p>
                            <ul>
                                <li>
                                    <NavLink
                                        to="https://github.com/hiteshchoudhary"
                                        className={
                                            ({isActive})=> `${isActive? "text-orange-600 border-b": "text-gray-400"}
                                            text-[13px] font-bold`
                                            }>
                                        Github
                                    </NavLink>
                                </li>
                                <li className='mt-3'>
                                    <NavLink
                                        to="/Discord"
                                        className={
                                            ({isActive})=> `${isActive? "text-orange-600 border-b": "text-gray-400"}
                                            text-[13px] font-bold`
                                            }>
                                        Discord
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='text-center font-bold'>
                            <p className='text-[11px] mb-3'>LEGAL</p>
                            <ul>
                                <li>
                                    <NavLink
                                        to="/privacy"
                                        className={
                                            ({isActive})=> `${isActive? "text-orange-600 border-b": "text-gray-400"}
                                            text-[13px] font-bold`
                                            }>
                                        Privacy Policy
                                    </NavLink>
                                </li>
                                <li className='mt-3'>
                                    <NavLink
                                        to="/terms & condition"
                                        className={
                                            ({isActive})=> `${isActive? "text-orange-600 border-b": "text-gray-400"}
                                            text-[13px] font-bold`
                                            }>
                                        Terms & condition
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='border-gray-300 my-6 ' />
                <div className='w-full h-auto bg-gray-50 shadow-2xs flex items-center justify-between pr-14 py-10'>
                    <span className='ml-3'>
                        © 2023
                        <a href="https://hiteshchoudhary.com/">
                            AmritBhusal
                        </a>
                        . All Rights Reserved.
                    </span> 
                    <div className='flex gap-5'>
                            <a href="https://facebook.com">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 320 512" 
                                width="15" 
                                height="15"
                                fill="currentColor"
                                >
                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                            </svg>
                            </a>
                            <a href="https://x.com/?lang=en">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 512 512"
                                width="15" 
                                height="15"
                                fill="currentColor"
                                >
                                <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/>
                            </svg>

                            </a>
                            <a href="">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 640 512"
                                width="15" 
                                height="15"
                                fill="currentColor"
                                >
                                <path d="M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z"/>
                            </svg>
                            </a>
                            <a href="">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 496 512"
                                width="15" 
                                height="15"
                                fill="currentColor"
                                >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                            </a>
                    </div>
                                
                </div>
            </div>
        </footer>
    )
}


