import React, { useEffect, useState } from 'react'
import TransactionCard from './TransactionCard'

export default function Transactions() {
    const [assets,setAssets] = useState([])

    useEffect(()=>{
        fetch('https://on-chain-server.vercel.app/transactions')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAssets(data)
        },[])
    })
  return (
    <div className='container mx-auto'>
        <h1 className='text-5xl font-bold text-red-400'>Transaction Page</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
            {
                assets.map(((asset) => <TransactionCard key={asset.id} asset={asset}></TransactionCard>))
            }
        </div>
    </div>
  )
}
