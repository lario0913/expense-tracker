import {useContext} from 'react'

import {expenseCategories, resetCategories, incomeCategories} from './constants/categories'
import {ExpenseTrackerContext} from './context/context'


const useTransactions = (title) => {
    resetCategories()
    const {transactions} = useContext(ExpenseTrackerContext)
    const transactionsPerType = transactions.filter( t => t.type === title)
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0)
    const categories = title === "Income" ? incomeCategories : expenseCategories

    transactionsPerType.forEach(t=>{
        const category = categories.find(c=> c.type === t.category)

        if(category){category.amount += t.amount}
    })

    const filteredCategories = categories.filter(c=> c.amount > 0)
    const chartData = {
        datasets: [{
            data: filteredCategories.map(c => c.amount),
            backgroundColor: filteredCategories.map(c => c.color)
        }],
        labels: filteredCategories.map(c => c.type)
    }

    return {total, chartData}
}

export default useTransactions
