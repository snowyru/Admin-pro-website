import React from 'react';
import { motion } from "framer-motion";
import SquareLogo from '../APAssets/SquareLogo.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
}

const transition = { duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]};

// const img={ 
//   hidden:{
//     scale:0.85,
//     opacity:0.1
//   },
//   unhidden:{
//     scale:1,
//     opacity:0.55,
//     transition:{duration:1.4, ease:[0.6, 0.01, -0.05, 0.9]},
//   }
// }

export default function About() {
  return (
    <>
      <motion.div className="hideScroll" >
        <motion.img exit={{width:"100%", y:"-15%", x:0, opacity:1, transition: { delay: 0.2, ...transition } }}
          animate={{ y: 0, x:-500, opacity: 0, width: "75%", transition: { delay: 0.2, ...transition } }}
          initial={{ width:"100%", y: "-15%" }}
          style={{"position": "absolute"}}
          className="TransLogo"
          src="https://i2.lensdump.com/i/tp3vIb.png"
          alt="tp3vIb.png" border="0"/>
        <motion.div className="hideScroll" >

          <Box sx={{ flexGrow:1 }}>
            <Grid container spacing = {1}>
              <Grid item xs={6} md={4}>
                <motion.img exit={{width:"1%", y:-350, opacity:0, transition: { delay: 0.2, ...transition } }}
                  animate={{width:"35%", y:0, scale:1.2, opacity:1, transition: { delay: 0.2, ...transition } }}
                  initial={{width:"1%", y:-350, opacity:0}}
                  src={SquareLogo} className="SqaureLogo" />
              </Grid>
              <Grid item xs={6} md={8}>
                <motion.h2> Who are we? </motion.h2>
                <motion.p> this is who we are lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</motion.p>
              </Grid>              
            </Grid>
          </Box>

        </motion.div>
      </motion.div>
    hello? About page
      <div className="container">
       <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="item"
        >
        <motion.path
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        />
        </motion.svg>
      </div> 
    </>
  );
}