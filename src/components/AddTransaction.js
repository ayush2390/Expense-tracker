import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = (e)=>{
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
        };
        addTransaction(newTransaction)
    }
  return (
    <>
      <h3>Add New Transaction</h3>
    <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor='label'>Label</label>
            <input type="text" placeholder='Enter label..' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label htmlFor='amount'>
                (<b>-</b>/<b>+</b>)Amount &nbsp; &nbsp; [-expense, +income]
            </label>
            <input type='number' placeholder="Enter amount.." value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <button className='btn' >Add Transaction</button>
    </form>
    </>
  )
}

export default AddTransaction
