import React, { useEffect, useState } from 'react'
import Transaction from './Transaction';

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3000/transactions')
        .then(res=>res.json())
        .then(data=>setTransactions(data))
        .catch(err=>console.log(err))
    })
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}></Transaction>)
            }
        </div>
    </div>
  )
}
