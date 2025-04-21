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
        <div className="hero bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="hero-content flex-col w-full max-w-lg">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold ">Add New Transaction</h1>
                    <p className="text-lg text-orange-400 mt-2">Fill out the form below to add a new transaction.</p>
                </div>
                <div className="card bg-white w-full rounded-lg shadow-lg p-6">
                    <form onSubmit={handleAsset} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Enter title" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Short Description</span>
                            </label>
                            <input type="text" name='short_describe' placeholder="Enter short description" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Details</span>
                            </label>
                            <textarea name='details' placeholder="Enter details" className="textarea textarea-bordered w-full" required></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Amount</span>
                            </label>
                            <input type="number" step="0.01" name='amount' placeholder="0.00" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Currency</span>
                            </label>
                            <input type="text" name='currency' placeholder="Enter currency (e.g., USD)" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Type</span>
                            </label>
                            <input type="text" name='type' placeholder="Enter type (e.g., Income, Expense)" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
