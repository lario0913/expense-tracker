import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import useStyles from './styles'

const CustmomizedSnackbar = ({open, setOpen}) => {
    const classes = useStyles();

    const handleChange = (event, reason) => {
        if(reason === 'clickaway') return;
        setOpen(false)
    }
    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                open={open}
                autoHideDuration={3000}
                onClose={handleChange}
            >
                <MuiAlert onClose={handleChange} severity="success" elevation={6}>
                    Transaction successfully created.
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default CustmomizedSnackbar
