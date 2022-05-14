import { Grid, Typography , Box , Container ,Link } from '@mui/material';
import React from 'react';
import "./Footer.css";
import Column1 from "./Column1.js";
import Column2 from "./Column2.js";
import Column3 from "./Column3.js";
import Column4 from "./Column4.js";

export default function Last() {
    
    return(
       <footer className="mainFooter">
           <Box>
               <Container>
                   <Grid container rowSpacing={15} columnSpacing={4}>
                       <Grid item xs={12} sm={6} md={3}>
                           <Column1 />
                       </Grid>
                       <Grid item xs={12} sm={6} md={3}>
                           <Column2 />
                       </Grid>

                       <Grid item xs={12} sm={6} md={3}>
                           <Column3 />
                       </Grid>

                       <Grid item xs={12} sm={6} md={3}>
                           <Column4 />
                       </Grid>

                       <Grid item md={12} sm={12}>
                            <div className="copyBox">
                                <Box sx={{width: "40%"}}>
                                <Typography sx={{fontSize: 15,fontWeight: "regular",color: "#677294"}}>Copyright 2022 @ Rising Protocol</Typography>
                                </Box>
                                <Box className="termBox">
                                    <Link className="term">Terms of use</Link> 
                                    <Typography>|</Typography>
                                    <Link className="privacy">Privacy Policy</Link>
                                </Box>
                            </div>
                       </Grid>
                   </Grid>
                   
               </Container>
               
           </Box>
       </footer>

    );
}