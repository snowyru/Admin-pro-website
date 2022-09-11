import React from 'react';
import { motion } from "framer-motion";
import {theme} from '../Themes';
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CarouselComp from '../APLayout/Carousel';
import '../carousel.css';
//Img
import LOGO from '../APAssets/LOGO.jpg';
import SquareLogo from '../APAssets/SquareLogo.jpg';
import RedFiles from '../APAssets/RedFiles.jpg'
import FWBN from '../APAssets/FWBN.jpg';
import ActionCoach from '../APAssets/ActionCoach.jpg';
import SASLAW from '../APAssets/SASLAW.jpg';
// import FatimaLI from '../APAssets/FatimaLI.jpg';

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
  transition:transition,
};

const img={ 
  hidden:{
    opacity:0.5
  },
  unhidden:{
    opacity:1,
    borderRadius:["10%","10%","10%","17%","10%","10%","10%"],
    transition:{repeat:Infinity, duration:5, ease:[0.6, 0.01, -0.05, 0.9]},
  }
};

export default function About() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <motion.div className="hideScroll" >
          <motion.img exit={{width:"100%", y:"-15%", x:0, opacity:1, transition: { delay: 0.2, ...transition } }}
            animate={{ y: 0, x:-500, opacity: 0, width: "75%", transition: { delay: 0.2, ...transition } }}
            initial={{ width:"100%", y: "-15%" }}
            style={{"position": "absolute"}}
            className="TransLogo"
            src={LOGO}
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
                      Admin Professional opened its virtual doors in the year 2010 when virtual administration was not very common on South African shores. With the impact of the pandemic and with so many businesses resorting to “working from home” Admin Professional already had the tools and structures in place to flip the pandemic up-side-down!
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

            <motion.div>
              <motion.h2 className="leadBig" > What our clients are saying </motion.h2>

                <motion.div className="leadBig" ><motion.div className="imgSpace hideScroll" >
                  <motion.img variants={img} animate={"unhidden"}
                  src={FWBN} className="clientImg" />
                </motion.div>
                  <motion.p style={{"color": "white"}} className="sub" >
                    “Admin Professional always imparts vision and determination. They are always a pleasure to deal with as they are professional, knowledgeable and a great asset to our organisation. I do not hesitate to recommend her.” <motion.b> – Fine Women Business Network</motion.b>
                  </motion.p>
                </motion.div>

                <motion.div className="leadBig"><motion.div className="imgSpace hideScroll" >
                  <motion.img variants={img} animate={"unhidden"}
                  src={ActionCoach} className="clientImg topPad" />
                  </motion.div>
                  <motion.p style={{"color": "white"}} className="sub" >
                    “As an entrepreneur who doesn’t like paperwork & a business owner that is not yet big enough for a full-time PA, well done Admin Professional for the solution of a timeshare PA. There is no more admin chaos and no pressure at having to fill a half-day every day, and affordable - I can match my staff bill to my rate of growth. Brilliant.” <br/> <motion.b> – Kathi Clarke Industrial Psychologist and Business Coach – Action Coach</motion.b>
                  </motion.p>
                </motion.div>  
                
                <motion.div className="leadBig"><motion.div className="imgSpace hideScroll" >
                  <motion.img variants={img} animate={"unhidden"}
                  src={SASLAW} className="clientImg topPad" />
                </motion.div>
                  <motion.p style={{"color": "white"}} className="sub" >                   
                  “I’ve had the privilege of working with Fatima for 7 years in my role as the General Manager of SASLAW. She is very organised and is a great planner and delivers a structured approach to projects.   She is creative and clever with new ideas and concepts suitable for her clients,
                  and is an expert in Client Relationship management. Fatima takes the time to understand the needs and requirements of her clients and stakeholders and delivers accordingly. I wish her all the very best for the future.”  <br/> <motion.b> – Clare Fincham – General Manager - SASLAW</motion.b>
                  </motion.p>
                </motion.div>  

            </motion.div>

                <motion.div className="hideScroll" >
                  <motion.h1 style={{"borderBottom":"0px"}} className="leadBig" >Some of our clients over past the years include</motion.h1>
                    <CarouselComp/>          
                </motion.div>
                
          </motion.div>
        </motion.div>
      </ThemeProvider>
    </>
  );
}