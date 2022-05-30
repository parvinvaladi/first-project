import React from 'react';
import { Dialog , DialogTitle , DialogContent , DialogContentText, DialogActions, Button } from '@mui/material';

export default function ShowDialog ({data , open , handleClose}) {
    var info = [];
    
    const handleYes = () => {
        getData(data);
        handleClose();
    };
    
    const getData = (information) => {
        if(localStorage.getItem("data") === null){
            info.push(information);
            console.log(JSON.parse(localStorage.getItem("data")));
            localStorage.setItem('data',JSON.stringify(info)); 
        }else{
            info = JSON.parse(localStorage.getItem("data"));
            info.push(information);
            localStorage.setItem("data",JSON.stringify(info));
        }
    }
    return(
        <>
       <Dialog 
            open={open}
            onClose={handleClose}
            >
                <DialogTitle>Save</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to save your data?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleYes} href="/login">Yes</Button>
                </DialogActions>
        </Dialog>
        </>
    );
}