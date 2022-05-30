import React from 'react';
import { Dialog , DialogTitle , DialogContent , DialogContentText, DialogActions, Button } from '@mui/material';

export default function ShowDialog ({user , open , handleClose}) {
    console.log(user);
    return(
        <>
       <Dialog 
            open={open}
            onClose={handleClose}
            >
                <DialogTitle>logged in</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Welcome to your panel <span>{user}</span>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} href="/home">OK</Button>
                </DialogActions>
        </Dialog>
        </>
    );
}