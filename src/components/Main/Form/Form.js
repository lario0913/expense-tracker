import React, {useState} from 'react'
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'

import useStyles from './styles'

const initialState = {
    amount: '',
    date: new Date(),
    category: '',
    type: 'Income'
}

const Form = () => {
    const classes = useStyles()
    const [formData, setFormData] = useState(initialState)

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom >
                    ....
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={formData.type}
                        onChange={e => setFormData({...FormData, type:e.target.value})}
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
                        onChange={e => setFormData({...FormData, category:e.target.value})}
                    >
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Salary">Salary</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    type="number" 
                    label="Amount" 
                    fullWidth
                    value={formData.amount}
                    onChange={e => setFormData({...FormData, amount:e.target.value})}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    type="date" 
                    label="Date" 
                    fullWidth
                    value={formData.date}
                    onChange={e => setFormData({...FormData, date:e.target.value})}
                />
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth>
                Create
            </Button>
        </Grid>
    )
}

export default Form
