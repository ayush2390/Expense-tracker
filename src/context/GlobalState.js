import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const InitialState = { transactions: []}

export const GlobalContext = createContext(InitialState)
 
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        });
    }
    function addTransaction(transaction, AppReducer){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });
    }

    return <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>{children}</GlobalContext.Provider>
}
