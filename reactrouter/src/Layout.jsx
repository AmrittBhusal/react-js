import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Home from './component/Home/Home'
import { Outlet } from 'react-router-dom'


function Layout() {
    return (
        <>
         <Header/>
         <Outlet/>  
         <Footer/>
        
        </>
       
    )
}

export default Layout
