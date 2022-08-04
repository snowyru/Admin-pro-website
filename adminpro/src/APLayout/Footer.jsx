import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {motion} from 'framer-motion'

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {'Copyright © '}
      <Link color="inherit" href="https://adminprofessional.net/">
        Admin Professional
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  const transition = { duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]};
  return (
  <motion.div id="top"
    initial={{opacity:0, y:220}} animate={{y:0, opacity:1, transition: {duration:1, ...transition}}}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight:"25vh",
        bgcolor: "#FFFFF"
      }}
    >
      <CssBaseline />
      
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor:"#3B3F3F"
          // backgroundColor: (theme) =>
          //   theme.palette.mode === '#3B3F3F'
          //     ? theme.palette.grey[200]
          //     : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" sx={{color:"white"}}>
            <a style={{"color":"white"}} href="#top">↑Goint up?↑</a><br/>
            <br/>Email us here: <a href="mailto:info@adminprofessional.co.za">info@adminprofessional.co.za</a>
          </Typography>
          <br/>
          <Copyright />
        </Container>
      </Box>
    </Box>
  </motion.div>
  );
}