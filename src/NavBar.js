import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Context as UserContext } from './UserContext';
import { Button } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
import DrawerComp from "./Drawer";
import { Redirect } from 'react-router-dom';

function NavBar(props) {
  
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const [tab, setTab] = React.useState(0);

    const handleChange = (event, newValue) => {
      setTab(newValue);
    };

    return (
        <>
       <React.Fragment>
      <AppBar sx={{ background: "#330000" }}>
        <Toolbar>
          <AccountBoxIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.2rem", paddingLeft: "10%" }}>
                Admin Professional
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                TabIndicatorProps={{ sx: {backgroundColor : 'green'}}}
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={tab}
                onChange={handleChange}
              >
                <Tab label="Home" />
                <Tab label="Our Team" />
                <Tab label="Pricing" />
                <Tab label="Contact Us" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained" color="error">
                Contact us
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
        </>
    )
};

export default NavBar;