import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function TransactionDetails() {
    const detail = useLoaderData()
    console.log(detail)
    const {title, details, amount, currency, date } = detail
    return (
        <div className='w-3/4 mx-auto my-10'>
            <h2 className='text-4xl font-bold text-center text-red-500'>{title}</h2>
            <div className="card bg-gray-200 shadow-xl my-10 text-center">
                <div className="card-body text-xl">
                    <p>{details}</p>
                    <p><span className='font-bold'>Amount :</span> {amount} {currency}</p>
                    <p><span className='font-bold'>Date :</span> {date}</p>
                </div>
            </div>
        </div>
    )
}
