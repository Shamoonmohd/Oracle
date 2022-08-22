import React, { useEffect, useState, useLocation } from 'react'
import { Grid, Toolbar, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import DrawerComp from './DrawerComp';
import WalletCard from './WalletCard';
import {ethers} from 'ethers';
import Web3Node from '../Web3Node';
import { Link } from "react-router-dom";


const Navbar = ({links,connectWalletHandler,connButtonText}) => {


    // const [activeTab, setActiveTab] = useState("Home");
    // const location =  useLocation();

    // useEffect(() => {

    //     if(location.pathname === "/") {
    //         setActiveTab("Home");
    //     } else if (location.pathname === "/add") {
    //         setActiveTab("Access Oracle api")
    //     }  else if (location.pathname === "/about") {
    //         setActiveTab("About") 
    //     } else if (location.pathname === "/contact") {
    //         setActiveTab("Contact Us") 
    //     }


    // }, [location]);







    const theme = useTheme();
    console.log(theme)
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    const [value, setvalue] = useState();
    return <AppBar sx={{backgroundImage:'linear-gradient(90deg, rgba(20,90,212,1) 0%, rgba(0,0,0,1) 66%, rgba(0,255,91,1) 94%)'}}>
        <Toolbar>
            {isMatch ? 
            <>
            <Typography>BlockOwn</Typography>
            <DrawerComp links={links}/>
            </>
            :<Grid sx={{placeItems:'center'}}container >
                <Grid item xs={2}>
                <Typography  style={{ color: 'white' }}><Link to='/'>Digital Asset Insight</Link></Typography>
                </Grid>
                <Grid item xs={6}>
                    <Tabs indicatorColor="secondary" 
                    textColor="inherit" 
                    value={value} 
                    onChange={(e,val) => setvalue(val)}
                    >
                  {links.map((link, index) => (
                    <Tab key = {index} label={link}/>
                  ))}
                    </Tabs>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={3}>
                    <Box display={"flex"}>
                    <WalletCard connectWalletHandler={connectWalletHandler} connButtonText={connButtonText} /> 
        
                        {/* <Button sx = {{ marginLeft: 1,background:"rgba(63,94,251,1)"}} variant="contained">Login</Button>
                        <Button sx = {{ marginLeft: 1,background:"rgba(63,94,251,1)"}} variant="contained">Signup</Button> */}
                    </Box>
                    
                </Grid>

            </Grid>
            
            }
         
        </Toolbar>
        
       
    </AppBar>
    
    

 
  
}

export default Navbar
