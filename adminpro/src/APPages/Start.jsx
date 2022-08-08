import React from 'react';
import Button from '@mui/material/Button'
import { Grid, Divider } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { ThemeProvider } from '@emotion/react';
import {motion} from 'framer-motion'
import redBG from '../APAssets/redBG.mp4';
import { useNavigate } from 'react-router-dom';
import {theme} from '../Themes'


export default function Start() {

  let Navigate = useNavigate();
  const Tohome = () => {
    let path = '/Home';
    Navigate(path);
  };
  const lexit = {
    opacity : 0,
    x : -100,
  };
  const rexit = {
    opacity : 0,
    x : 100,
  };

  return (
  <>
    <ThemeProvider theme={theme}>
      <div>
        <motion.img exit={{opacity: 1, duration:1}} style={{"position":"absolute","zIndex":"1"}} className="APLogo" src="https://i2.lensdump.com/i/tp3vIb.png" alt="tp3vIb.png" border="0" width="100%"/>
        <video style={{"position":"fixed"}} src={redBG} width="100%" autoPlay loop />
        <img className="StartLogo" src="https://i1.lensdump.com/i/tp3eUT.png" alt="tp3eUT.png" border="0"/>
        <img src="https://i2.lensdump.com/i/tp3vIb.png" alt="tp3vIb.png" border="0" width="100%"/>

        <div>
          <Grid container >
            <Grid item xs={5} md={6}>
            <motion.div className="startButtons"
                exit={lexit}
                whileHover={{scale:[1,1.1,1.11,1.1,1]}}
                transition={{ duration:2, ease: [0.43, 0.13, 0.23, 0.96]}}>
              <Button className=""
                startIcon={<MailOutlineIcon/>} size="large" variant="contained"
                onClick={() => window.location = 'mailto:info@adminprofessional.net'}>Email Us</Button>
              </motion.div>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item xs={6} md={5}>
              <motion.div className="startButtons"
                exit={rexit}
                whileHover={{
                    scale:[1,1.2,1.21,1.2,1,1],
                    rotate: [0,2,-2,3,-2,-1,0]
                }}
                transition={{duration:2}}>
                <Button className=""
                onClick={Tohome} endIcon={<PlayArrowIcon/>} 
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
