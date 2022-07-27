import React from 'react';
import {motion} from 'framer-motion';
import Typer from '../APAssets/Typer.jpg';
import RedFiles from '../APAssets/RedFiles.jpg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {

  const transition = { duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]};

  return (
  <>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(1)).map((_, index) => (  
        <><Grid item xs={2} sm={4} md={4} key={index}>
          <Item><motion.img src={RedFiles} className="leftSVG" initial={{ opacity: 0, x: -800 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1, ...transition } }} /></Item>
        </Grid><Grid item xs={2} sm={4} md={4} key={index}>
            <Item><motion.img animate={{ y: 0, width: "60%", transition: { delay: 0.2, ...transition } }}
              initial={{ y: "-15%" }}
              style={{}}
              className="imgcenterer"
              src="https://i2.lensdump.com/i/tp3vIb.png"
              alt="tp3vIb.png" border="0" width="100%" /></Item>
          </Grid><Grid item xs={2} sm={4} md={4} key={index}>
            <Item><motion.img src={Typer} className="rightSVG" initial={{ opacity: 0, x: 800 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1, ...transition } }} /></Item>
          </Grid></>
      ))}
      </Grid>
    </Box>

  </>
  );
}