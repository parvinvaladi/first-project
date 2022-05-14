import React from "react";
import "./Footer.css";
import { Typography , Box } from '@mui/material';

export default function Column4(){
    return(
        <>
           <Box>
                <Box className="heads">
                    <Typography sx={{fontWeight: "semibold",fontSize: 18,cursor: "context-menu"}}>Contact Us</Typography>
                </Box>
                <Box className='info'>
                    <Typography className="page">+00 000 00 00</Typography>
                </Box>
                <Box className='info'>
                    <Typography className="page">info@Rising.com</Typography>
                </Box>
                <Box className='info'>
                    <Typography className="page">Istanbul</Typography>
                </Box>
            </Box>
        </>
    );
}

