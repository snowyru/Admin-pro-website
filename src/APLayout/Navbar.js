import * as React from 'react';
import { Navigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
import DrawerComp from "./Drawer";

function NavBar() {
  

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const [tab, setTab] = React.useState(0);
    const handleChange = (event, newValue) => {
      setTab(newValue);
    };
    console.log(tab);

    return (
        <>
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
                        TabIndicatorProps={{ sx: { backgroundColor: 'red'} }}
                        sx={{ marginLeft: "auto" }}
                        textColor="inherit"
                        value={tab}
                        onChange={handleChange}
                    >
                        <Tab label="Home" />
                        <Tab label="Our Team" />
                        <Tab label="Our Clients" />
                        <Tab label="Contact Us" />
                    </Tabs>
                    <Button sx={{ marginLeft: "auto" }} variant="contained" color="error">
                        Contact us
                    </Button>
                    </>
                )}
                </Toolbar>
            </AppBar>
        </>
    )
};

export default NavBar;