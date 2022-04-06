import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Context as UserContext } from './UserContext';
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
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

function NavBar(props) {
  
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const initialState = {
        '/': 'text-secondary',
        '/features': 'text-secondary',
        '/pricing': 'text-secondary',
        '/faqs': 'text-secondary',
        '/about': 'text-secondary'
    }

    let [ linkState, setLinkState ] = useState(initialState);
    let { state } = useContext(UserContext);

    useEffect(
        function() {
            setLinkState(
                {
                    ...initialState,
                    [props.path]: 'text-white'
                }
            )
        },
        [ props.path ]
    )


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
            <ThemeProvider theme={theme}>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" />
                <Tab label="Our Team" />
                <Tab label="Pricing" />
                <Tab label="Contact Us" />
              </Tabs>
              </ThemeProvider>
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