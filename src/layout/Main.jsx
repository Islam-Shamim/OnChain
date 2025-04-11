import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../pages/Navber'

export default function Main() {
    return (
        <div className='max-w-7xl mx-auto px-4 py-8'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    )
}
