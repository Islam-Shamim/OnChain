import React from 'react'

export default function Form() {
    const handleAsset = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const short_describe = e.target.short_describe.value
        const details = e.target.details.value
        const amount = e.target.amount.value
        const type = e.target.type.value
        const currency = e.target.currency.value
        const date = e.target.date.value

        const asset = { title, short_describe, details, type, amount, currency, date }

        fetch('https://on-chain-server.vercel.app/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(asset)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Transaction Added')
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Added New Transaction!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleAsset} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name='title' placeholder="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Describe</span>
                            </label>
                            <input type="text" name='short_describe' placeholder="short_describe" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' placeholder="details" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Amount</span>
                            </label>
                            <input type="number" step="0.01"
                                name='amount' placeholder="0.00" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Currency</span>
                            </label>
                            <input type="text" name='currency' placeholder="currency" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="text" name='type' placeholder="type" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' placeholder="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
