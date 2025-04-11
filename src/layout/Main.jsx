import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './Navber'
import Footer from './Footer'

export default function Main() {
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
