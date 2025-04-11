import React from 'react'
import { Link } from 'react-router-dom'

export default function TransactionCard({ asset }) {
  console.log(asset)
  const {_id,title,short_describe} = asset
  return (
    <div className="card bg-green-200 w-96">
      <div className="card-body text-center">
        <h2 className='text-xl font-bold'>{title}</h2>
        <p>{short_describe}</p>
        <div className="card-actions justify-center">
          <Link to={`/asset/${_id}`}><button className="btn">Show Details</button></Link>
        </div>
      </div>
    </div>
  )
}
