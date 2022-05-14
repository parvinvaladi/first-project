import React from "react";
import logo from '../images/Group 1.png';
import "./Footer.css";
import { Facebook, Instagram, Twitter } from './svgIcons';
import { Typography , Box } from '@mui/material';

export default function Column1(){
    return(
        <>
           <div className='box'>
                <Box>
                    <img src={logo} alt='logo'  className="logo"/>
                </Box>
                <Box>
                    <Typography variant='h5' sx={{fontSize: 35,fontWeight: "medium"}} className="logoName">Rising</Typography>
                </Box>
            </div>
            <Box className="contactPage">
                <span className='spanLogo'>
                    <Facebook className="contactLogo" />
                </span>
                
                <span className='spanLogo'>
                <Twitter />
                </span>

                <span className='spanLogo'>
                <Twitter />
                </span>

                <span className='spanLogo'>
                    <Instagram />
                </span>
                
            </Box>
        </>
    );
}

