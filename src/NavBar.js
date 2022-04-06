import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Context as UserContext } from './UserContext';
import { Link } from 'react-router-dom';
import { Button, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from './themeProvider';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
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
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

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
       <ThemeProvider theme={theme}>
      <AppBar sx={{ background: "#330000" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Admin Professional
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Products" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </React.Fragment>
        </>
    )
};

export default NavBar;