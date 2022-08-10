import React from 'react';
import { motion } from "framer-motion";
import {theme} from '../Themes';
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import CarouselComp from '../APLayout/Carousel';
import '../carousel.css';
//Img
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

const info = {
  hiddenL : {
    opacity : 0,
    x:-250,
    scale : 0.3,
    rotate: 90,
  },
  hiddenR : {
    opacity : 0,
    x:250,
    scale : 0.3,
    rotate: -90
  },
  unhidden : {
    opacity : 1,
    x:0,
    scale : 1,
    rotate:0,
    transition:{transition}
  },
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

  // the team  
  const [fatima, setfatima] = React.useState(false);
  const [nuraan, setnuraan] = React.useState(false);

  const fatimaInfo = () => {
    setfatima(!fatima);
    console.log("Hi")
  }
  const nuraanInfo = () => {
    setnuraan(!nuraan);
    console.log("bi")
  }

  return (
    <>
      <ThemeProvider theme={theme}>
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
              <motion.h1 className="leadBig" > Meet the team </motion.h1>
                <Grid container spacing={2}>

                  <Grid item xs={12} md={6}>
                    <motion.h1 onClick={fatimaInfo} className="leadName" > Fatima Rustin </motion.h1>
                    <Avatar onClick={fatimaInfo} alt="Fatima Rustin / Solomon" src="" sx= {{minWidth: "auto", minHeight: "auto"}}/>
                    <motion.h2 onClick={fatimaInfo} className="subSmall" > ~Founder & Prinical Administrator~ </motion.h2>
                    <Box textAlign="center" >
                      <Button style={{textTransform: 'lowercase'}} className="btnCenter" startIcon={<AccountBoxRoundedIcon/>} color="secondary" size="large" variant="contained" onClick={fatimaInfo} >More Info?</Button>
                    </Box>
                    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                      open={fatima} onClick={fatimaInfo}>

                      <motion.div variants={info} initial={"hiddenL"} animate={fatima ? "unhidden" : "hiddenL"} className="infoScreen">
                        {fatima === true && 
                          <div className="container">
                            <h1 className="infoh1" >Fatima Rustin</h1>
                            <p className="infop" >
                            The owner of the business and holds the position of Principal Administrator. She has evidenced a lifelong commitment to education.  With a BA Business Degree in Human Ecology, a Diploma in Human Resource Management and Training and a Diploma in Bookkeeping, and completed and demonstrated an entrepreneurial apprenticeship with ActionCOACH Business Coaching.  

                            Fatima has worked as an Administrative Team Leader, Human Resource Administrator and Executive Assistant to an executive entrepreneurial team, established and coordinated virtual teams and business entities and assisted professional bodies to coordinate national seminars and conferences and as a result of the pandemic

                            coordinated virtual meetings and webinars. Fatima’s experience spans 23years, there is nothing about the challenges and administrative support requirements of big and small enterprises alike that she has not experienced and mastered firsthand. 

                            Fatima is a proud mom of two teenagers and a busy seven-year-old boy.
                            </p>
                          </div>
                        }  
                      </motion.div>

                    </Backdrop>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <motion.h1 onClick={nuraanInfo} className="leadName" > Nuraan Jattiem </motion.h1>
                    <Avatar onClick={nuraanInfo} alt="Nuraan Jattiem" src="" sx= {{minWidth: "auto", minHeight: "auto"}}/>
                    <motion.h2 onClick={nuraanInfo} className="subSmall" > ~Office Co-ordinator & Virtual Administrator~ </motion.h2>
                    <Box textAlign="center" >
                      <Button style={{textTransform: 'lowercase'}} className="btnCenter" startIcon={<AccountBoxRoundedIcon/>} color="secondary" size="large" variant="contained" onClick={nuraanInfo}>More Info?</Button>
                    </Box>
                    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                      open={nuraan} onClick={nuraanInfo}>

                      <motion.div variants={info} initial={"hiddenR"} animate={nuraan ? "unhidden" : "hiddenR"} className="infoScreen">
                        {nuraan === true && 
                          <div className="container">
                            <h1 className="infoh1" >Nuraan Jattiem</h1>
                            <p className="infop" >
                            Nuraan Jattiem joins our team as the Office Co-ordinator and Virtual Administrator. Norman’s background of administration within the legal and imports environment demonstrates years of front office administration experience which includes accounts administration, document processing and report writing and data capturing. Nuraan coordinates the schedules of our busy virtual administrative office and is assigned to a long-standing client for complete front office administrative support. She joined the team last year but has already proven competencies in key areas required for excellence in virtual administration.
                            Nuraan has also co-launched a small business called “Mini Chefs” and is a mom to two amazing daughters.
                            </p>
                          </div> 
                        }  
                      </motion.div>

                    </Backdrop>
                  </Grid>

                </Grid>
            </motion.div>

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

                <motion.div>
                  <motion.h1 style={{"borderBottom":"0px"}} className="leadBig" >Some of our clients over past the years include</motion.h1>
                    <CarouselComp/>          
                </motion.div>

            </motion.div>

          </motion.div>
        </motion.div>
      </ThemeProvider>
    </>
  );
}