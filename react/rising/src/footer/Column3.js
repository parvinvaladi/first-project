import React from "react";
import "./Footer.css";
import { Typography , Box , Link } from '@mui/material';

export default function Column2(){
    return(
        <>
           <Box>
                <Box className="heads">
                    <Typography sx={{fontWeight: "semibold",fontSize: 18,cursor: "context-menu"}}>Support</Typography>
                </Box>
                <Box className="items">
                    <Link className="page">FAQ</Link>
                </Box>
                <Box className="items">
                    <Link className='page'>How it</Link>
                </Box>
                <Box className="items">
                    <Link className="page">Features</Link>
                </Box>
                <Box className="items">
                    <Link className="page">Contact</Link>
                </Box>
                <Box className="items">
                    <Link className="page">Reporting</Link>
                </Box>
            </Box>
        </>
    );
}

