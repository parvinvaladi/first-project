import { AppBar, Container, Toolbar, Typography , Tabs , Tab , Button , Box } from "@mui/material";
import React from "react";
import logo from '../images/logo.png';
import "./TopBar.css";

export default function TopBar(){
    const [tabValue,setTabValue] = React.useState();
    
    return(
        <>
          <AppBar elevation={0} position="fixed" sx={{backgroundColor: "#fff"}} className="navbar">
              <Container maxWidth="xl">
                  <Toolbar className="nav--toolbar">
                      <Box className="logoBox">
                            <img src={logo} alt="logo" className="logo" />
                            <Typography variant="h6" sx={{fontWeight: "bold",color: "#017EFB"}} component="a" className="name">SHOPPING</Typography>
                      </Box>
                      <Tabs value={tabValue} onChange={(e,value) => setTabValue(value)} className="navbar--tabs">
                          <Tab label="Home" sx={{fontSize: 18,textTransform: "capitalize"}}></Tab>
                          <Tab label="Keep your Eyse"  sx={{fontSize: 18,textTransform: "capitalize"}}></Tab>
                          <Tab label="Education" sx={{fontSize: 18,textTransform: "capitalize"}}></Tab>
                          <Tab label="Help Center" sx={{fontSize: 18,textTransform: "capitalize"}}></Tab>
                          <Tab label="About Us" sx={{fontSize: 18,textTransform: "capitalize"}}></Tab>
                      </Tabs>
                      <Box className="loginBox">
                            <Button variant="text" href="/login"
                             sx={{color: "#017EFB",textTransform: "capitalize",fontSize: "18px"}} >Login</Button>

                            <Button variant="contained" href="/signup" 
                            sx={{backgroundColor: "#FF8800",marginLeft: 3,textTransform: "capitalize",fontSize: "18px",borderRadius: "6px"}} 
                            >Signup</Button>
                      </Box>
                  </Toolbar>
              </Container>
          </AppBar>
        </>
    );
}