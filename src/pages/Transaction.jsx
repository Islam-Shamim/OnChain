import React from 'react'

export default function Transaction({transaction}) {
    console.log(transaction)
    const {title,short_describe} = transaction;
    return (
        <div className="card bg-blue-200 w-96 mx-auto">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{short_describe}</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-gray-200">Show Details</button>
                </div>
            </div>
        </div>
    )
}
