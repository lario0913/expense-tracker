import React, {useReducer, createContext} from 'react'
import contextReducer from './contextReducer'

const initiatState = []

export const ExpenseTrackerConext = createContext(initiatState)

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    // Action Creators
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            paylaod: id
        })
    }

    return (
        <ExpenseTrackerConext.Provider value={{appName: 'Expense Tracker'}}>
            {children}
        </ExpenseTrackerConext.Provider>
    )
}