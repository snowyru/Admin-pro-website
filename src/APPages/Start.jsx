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
import Box from '@mui/material/Box';


export default function Start() {

let Navigate = useNavigate();
const Tohome = () => {
  let path = '/Home';
  Navigate(path);
};
const transition = { duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]}
const lexit = {
  opacity : 0,
  x : -100,
  transition : transition,
};
const rexit = {
  opacity : 0,
  x : 100,
  transition : transition,
};

return (
<>
  <ThemeProvider theme={theme}>
  <div style={{backgroundColor:"#660404"}} className="startContainer" >
    <div className="startContainer hideScroll" >
      <motion.img exit={{opacity: 1, duration:1}} className="APLogo" src="https://i2.lensdump.com/i/tp3vIb.png" alt="tp3vIb.png" width="100%"/>
      <div style={{"position":"absolute","min-width":"100%","min-height":"100%"}} >
        <video className="BGvid" src={redBG} width="100%"  autoPlay loop />
      </div>    
        <img className="StartLogo" src="https://i1.lensdump.com/i/tp3eUT.png" alt="tp3eUT.png"/>
    </div>
    <div className="btnContainer" >
      <motion.div className="btnEmail"
        exit={lexit}
        whileHover={{scale:[1,1.1,1.11,1.1,1],transition: transition}}
        >
          <Button className="btnCenter"
            startIcon={<MailOutlineIcon/>} size="large" variant="contained"
            onClick={() => window.location = 'mailto:info@adminprofessional.net'}>Email Us</Button>
      </motion.div>
      <motion.div className="btnStart"
        exit={rexit}
        whileHover={{
          scale:[1,1.2,1.21,1.2,1,1],
          rotate: [0,2,-2,3,-2,-1,0],
          transition: transition
        }}
        >
          <Button className="btnCenter"
          onClick={Tohome} endIcon={<PlayArrowIcon/>} 
          color="secondary" size="large" variant="contained">Start</Button>
      </motion.div>
    </div>
  </div>
  </ThemeProvider>
</>
)
}
