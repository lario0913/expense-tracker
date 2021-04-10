import React, {useReducer, createContext} from 'react'
import contextReducer from './contextReducer'

const initiatState = []

export const ExpenseTrackerContext = createContext(initiatState)

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)


    // Action Creators
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            paylaod: id
        })
    }
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            paylaod: transaction
        })
    }


    return (
        <ExpenseTrackerConext.Provider value={{
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </ExpenseTrackerConext.Provider>
    )
}