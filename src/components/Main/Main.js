import React,{useContext} from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'

import useStyles from './styles'
import Form from './Form/Form'
import List from './List/List'
import { ExpenseTrackerContext } from '../../context/context'
import InfoCard from '../infocard'

const Main = () => {
    const classes = useStyles()
    const {balance} = useContext(ExpenseTrackerContext)

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align="center" variant="h5" >Total Balance: ${balance}</Typography>
                <Typography variant="subtitle2" style={{lineHeight: '1.1em', marginTop: '10px'}}>
                    <InfoCard />
                </Typography>

                <Divider className={classes.divider} />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
