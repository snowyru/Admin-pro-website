
import * as React from 'react';
import './index.css';
import { Button, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import logo from './LOGO.png';
import linkedIn from './linkedin.svg';
import theme from './themeProvider';

function Footer() {
    

    return (

       <>
            <Grid container spacing={1}>

                <Grid item xs={2}><img className="m-2 p-2" alt="Logo" src={logo} width={"200px"} /> </Grid>
                    <Grid item xs={2}>
                        <p style={{"marginTop":"2.3rem","color":"white", "fontSize":"0.8rem"}} >Copyright © 2022 - adminpro.com</p>
                    </Grid>
                    <Grid item xs={5}>
                        <ThemeProvider theme={theme}>
                            <Button color="primary" className="mt-4 m-2 ms-5" size="Medium" variant="contained">Home</Button>
                            <Button color="secondary" className="m-2 mt-4" size="Medium" variant="outlined">Home</Button>
                            <Button color="secondary" className="m-2 mt-4" size="Medium" variant="outlined">Home</Button>
                            <Button color="secondary" className="m-2 mt-4" size="Medium" variant="outlined">Home</Button>
                        </ThemeProvider>
                    </Grid> 
                        <Grid item xs={1}>
                            <img style={{"marginLeft":"18rem", "marginTop":"1.2rem"}}  alt="linkedIn" src={linkedIn} width={"50px"}/>
                        </Grid>
                
            </Grid>

        </>
    )
}

export default Footer;