import React from 'react';
import { motion } from "framer-motion";
import SquareLogo from '../APAssets/SquareLogo.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RedFiles from '../APAssets/RedFiles.jpg'

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

const transition = { duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]};

const REnter = { 
  hidden:{
    opacity: 0,
    x:300,
  },
  unhidden:{
    opacity:1,
    x:0,
  }
};

const RExit = { 
  opacity : 0,
  x : 1000,
  transition:{duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]},
 };

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
            <Grid container spacing = {0}>
              <Grid item xs={12} md={4}>
                <motion.div className="hideScroll">
                <motion.img exit={{width:"1%", y:-350, opacity:0, transition: { delay: 0.2, ...transition } }}
                  animate={{width:"100%", y:0, scale:1.2, opacity:1, transition: { delay: 0.2, ...transition } }}
                  initial={{width:"1%", y:-350, opacity:0}}
                  src={SquareLogo} className="" />
                </motion.div>
              </Grid>
              <Grid item xs={12} md={8}>
                <motion.div
                exit={RExit}
                variants={REnter}
                initial={"hidden"}
                animate={"unhidden"}
                transition={{staggerChildren:0.6}}>
                  <motion.h2 variants={REnter} transition={transition} className="leadSmall"> The story of Admin Professional </motion.h2>
                  <motion.p variants={REnter} transition={transition} className="subSmall" > 
                    Admin Professional opened its virtual doors in the year 2010 when virtual administration was not very common on South African shores. With the impact of the pandemic and with so many businesses resorting to ‘working from home” Admin Professional already had the tools and structures in place to flip the pandemic up-side-down! 
                    <br/><br/>
                    We have positioned our administrative offering to assist small business owners, corporate entities and NGO’s with professional virtual administrative assistance where they do not require the services of full-time staff.
                  </motion.p>
                </motion.div>
              </Grid>              
            </Grid>
          </Box>

          <Box sx={{ flexGrow:1 }}>
            <Grid container spacing = {0}>
              <Grid item xs={12} md={8}>
                <motion.div
                  exit={RExit}
                  variants={REnter}
                  initial={"hidden"}
                  animate={"unhidden"}
                  transition={{staggerChildren:0.6}}>
                  <motion.h2 variants={REnter} transition={transition} className="leadSmall"> Training & Development </motion.h2>
                    <motion.p variants={REnter} transition={transition} className="subSmall" > 
                    Ongoing staff training and development is a priority so that we know we are delivering the best.
                    Hiring one of our staff members means that you have an entire team and a range of administrative expertise at your disposal!
                    </motion.p>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={4}>

                  <motion.div className="hideScroll">
                <motion.img exit={{width:"1%", y:-350, opacity:0, transition: { delay: 0.2, ...transition } }}
                  animate={{width:"100%", y:0, scale:1.2, opacity:1, transition: { delay: 0.2, ...transition } }}
                  initial={{width:"1%", y:-350, opacity:0}}
                  src={RedFiles} className="" />
                </motion.div>
              </Grid>              
            </Grid>
          </Box>

      <motion.h1 className="leadBig" >Meet the team </motion.h1>

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