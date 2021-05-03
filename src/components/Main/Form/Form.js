import React, {useState, useContext} from 'react'
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'
import {v4 as uuidv4} from 'uuid'

import useStyles from './styles'
import { ExpenseTrackerContext } from '../../../context/context'
import { expenseCategories, incomeCategories } from '../../../constants/categories'
import formatDate from '../../../utils/formatDate'
import { useSpeechContext } from '@speechly/react-client'

const initialState = {
    amount: '',
    date: formatDate(new Date()),
    category: '',
    type: 'Income'
}
const Form = () => {
    const classes = useStyles()
    const [formData, setFormData] = useState(initialState)
    const {addTransaction} = useContext(ExpenseTrackerContext)
    const {segment} = useSpeechContext()

    const selectedCategory = formData.type === "Income" ? incomeCategories : expenseCategories 

    const addNewTransaction = () => {
        const transaction = {
                                ...formData,
                                amount: Number(formData.amount),
                                id: uuidv4()
                            }
        addTransaction(transaction)
        setFormData(initialState)
    }

    console.log(formData)

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom >
                    {
                        segment ? (
                            <>
                                {segment.words.map(w => w.value).join(" ")}
                            </>
                        ) : null
                    }
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={formData.type}
                        onChange={e => setFormData({...formData, type:e.target.value})}
                    >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={formData.category}
                        onChange={e => setFormData({...formData, category:e.target.value})}
                    >
                        {
                            selectedCategory.map(c => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    type="number" 
                    label="Amount" 
                    fullWidth
                    value={formData.amount}
                    onChange={e => setFormData({...formData, amount:e.target.value})}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    type="date" 
                    label="date" 
                    fullWidth
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: formatDate(e.target.value)})}
                />
            </Grid>
            <Button 
                className={classes.button} 
                variant="outlined" 
                color="primary" 
                fullWidth
                onClick={addNewTransaction}
                >
                Create
            </Button>
        </Grid>
    )
}

export default Form
