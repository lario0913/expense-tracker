import React, {useContext} from 'react'

import {expenseCategories, resetCategories, incomeCategories} from './constants/categories'
import {ExpenseTrackerContext} from './context/context'

const useTransactions = (title) => {
    resetCategories()
    const {transactions} = useContext(ExpenseTrackerContext)
    const selectedCategories = transactions.filter( t => t.type === title)
    const total = selectedCategories.reduce((acc, currVal) = acc += currVal.amount, 0)
    const categories = title === "Title" ? incomeCategories : expenseCategories

    return (
        <div>
            
        </div>
    )
}

export default useTransactions
