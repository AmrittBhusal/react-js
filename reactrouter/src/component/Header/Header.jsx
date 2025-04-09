import React from 'react'
import { Link,NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className='max-w-full  h-auto border-gray-200 mt-3 '>
            <nav className='max-w-[900px] h-auto m-auto flex flex-wrap items-center justify-between
             bg-gray-50 shadow-2xs '>
                <div className='w-full h-auto  flex flex-wrap items-center justify-between
                   mx-5'>
                    <Link to="/">
                        <img 
                        className='h-12 '
                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" 
                        alt="logo" />
                    </Link>
                    <ul className='flex gap-8'>
                        <li>
                            <NavLink
                            to="/"
                            className={({isActive})=>
                                ` ${isActive ? "text-orange-500 border-b":"text-gray-400"} font-bold`  
                            }
                                
                            >
                                Home    
                            </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/about"
                            className={({isActive})=>
                                ` ${isActive ? "text-orange-500 border-b":"text-gray-400"} font-bold`  
                            }
                                
                            >
                                About   
                            </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/contact"
                            className={({isActive})=>
                                ` ${isActive ? "text-orange-500 border-b":"text-gray-400"} font-bold`  
                            }
                                
                            >
                                Contact  
                            </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/github"
                            className={({isActive})=>
                                ` ${isActive ? "text-orange-500 border-b":"text-gray-400"} font-bold`  
                            }
                                
                            >
                                Github  
                            </NavLink>
                        </li>
                    </ul>
                    
                    <div className='flex gap-5 items-center '>
                        <Link className='font-bold'>
                            Log in
                        </Link>
                        <Link 
                        className='font-bold bg-amber-600 rounded-[10px] px-4 py-2'>
                        Get Started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
                
            
    );
}


