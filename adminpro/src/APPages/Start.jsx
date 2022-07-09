import React, {useState} from 'react';
import Button from '@mui/material/Button'
import { Grid, Divider } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import {motion} from 'framer-motion'
import redBG from '../APAssets/redBG.mp4';
import { Navigate, useNavigate } from 'react-router-dom';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#ffffff',
      darker: '#053e85',
    },
    secondary: {
      main: '#ff0303',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#F0F0',
    },
  },
});


export default function Start() {

  let Navigate = useNavigate();
  const Tohome = () => {
    let path = '/2home';
    Navigate(path);
  }

  return (
  <>
    <ThemeProvider theme={theme}>
      <div>
      {/* <video style={{"position":"fixed"}} src={redBG} width="100%" autoplay="true" /> */}
        <img style={{"position":"absolute","zIndex":"1"}} className="APLogo" src="https://i2.lensdump.com/i/tp3vIb.png" alt="tp3vIb.png" border="0" width="100%"/>
        <video style={{"position":"fixed"}} src={redBG} width="100%" autoPlay loop />
        <img style={{"marginLeft":"5rem","marginTop":"2rem","position":"fixed"}} src="https://i1.lensdump.com/i/tp3eUT.png" alt="tp3eUT.png" border="0" width="90%"/>
        <img src="https://i2.lensdump.com/i/tp3vIb.png" alt="tp3vIb.png" border="0" width="100%"/>

        <div>
          <Grid container >
            <Grid item xs={5} md={6}>
            <motion.div className="startButtons startBtnBox"
                animate={{
                    scale:[1,1.05,1,1],
                    rotate: [0,0,0,0]
                }}
                transition={{delay:0.3, repeat: Infinity, duration:3}}>
              <Button 
                startIcon={<MailOutlineIcon/>} size="large" variant="contained"
                onClick={() => window.location = 'mailto:info@adminprofessional.net'}>Email Us</Button>
              </motion.div>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item xs={6} md={5}>
              <motion.div className="startButtons startBtnBox"
                animate={{
                    scale:[1,1,1.2,1.2,1,1],
                    rotate: [0,2,-2,2,-2,0]
                }}
                transition={{delay:0.3, repeat: Infinity, duration:4}}>
                <Button onClick={Tohome} endIcon={<PlayArrowIcon/>} 
                color="secondary" size="large" variant="contained">Start</Button>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  </>
  )
}
