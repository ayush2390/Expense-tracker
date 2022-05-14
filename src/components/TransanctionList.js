import React, { useCallback, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

function TransanctionList() {

    const {transactions} = useContext(GlobalContext)
  return (
    <div>
      <h3>History</h3>
      <ul className='list'>
          {transactions.map((transaction) =>
              (<Transaction key={transaction.id} transaction={transaction} />)
          )}
      </ul>
    </div>
  )
}

export default TransanctionList
