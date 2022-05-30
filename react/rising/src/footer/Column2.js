import React from "react";
import "./Footer.css";
import { Typography , Box , Link } from '@mui/material';

export default function Column2(){
    return(
        <>
           <Box>
                <Box className="heads">
                    <Typography sx={{fontWeight: "semibold",fontSize: 18,cursor: "context-menu"}}>Links</Typography>
                </Box>
                <Box className="items">
                    <Link className="page">Home</Link>
                </Box>
                <Box className="items">
                    <Link className="page">Test</Link>
                </Box>
                <Box className="items">
                    <Link className="page">Test</Link>
                </Box>
                <Box className="items">
                    <Link className="page">Test</Link>
                </Box>
                <Box className="items">
                    <Link className="page">Test</Link>
                </Box>
            </Box>
        </>
    );
}

