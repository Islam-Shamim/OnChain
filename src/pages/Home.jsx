import React from 'react'
import Transactions from './Transactions'

export default function Home() {
    return (
        <div className='text-center my-10'>
            <h1 className='text-5xl font-bold text-red-400'>Welcome Home</h1>
            <Transactions></Transactions>
        </div>
    )
}
