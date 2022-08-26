import React from 'react';
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LOGO from '../APAssets/LOGO.jpg';

const transition = { duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]};

const REnter = {
  hidden:{
    opacity: 0,
    x:300,
  },
  unhidden:{
    opacity:1,
    x:0,
    transition:transition
  }
};

const RExit = {
  opacity : 0,
  x : 1000,
  transition:transition,
};

export default function About() {



  return (
    <><div className="hidescroll-x">
      <motion.img exit={{width:"100%", y:"-15%", x:[1000,1000,0], opacity:1, transition: { delay: 0.2, ...transition } }}
        animate={{ y: 0, x:[0,1000,1000,1000,1000,0], opacity: 0, width: "75%", transition: { delay: 0.2, ...transition } }}
        initial={{x:0, width:"100%", y: "-15%" }}
        style={{"position": "absolute"}}
        className="TransLogo"
        src={LOGO}
        alt="tp3vIb.png" border="0"/>
      <motion.div variants={REnter} exit={RExit} initial={"hidden"} animate={"unhidden"} transition={{staggerChildren:0.6}} className="App"> 
        <Typography gutterBottom variant="h3" align="center">
        </Typography>
        <Grid>
          <Card style={{backgroundColor: "#fff1ed",maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Contact Us Form
            </Typography> 
              <Typography variant="body2" component="p" gutterBottom>
                Please fill in the form if you have any questions or <br/> to request a quote.
            </Typography> 
              <form action="https://formsubmit.co/01e00a96602cef85b01a0c2efc02f238" method="POST" >
                <input type="text" name="_honey" style={{display: 'none'}} />
                <input type="hidden" name="_template" value="box"/>
                <input type="hidden" name="_autoresponse" value="Thank you for submitting your email through adminprofessional.net, our team will assist you shortly within working hours"/>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <label>
                    <TextField type="text" name="firstName" placeholder="Enter first name" label="First Name" variant="filled" fullWidth required />
                    </label>                  
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <label>
                    <TextField type="text" name="lastName" placeholder="Enter last name" label="Last Name" variant="filled" fullWidth required />
                    </label>
                  </Grid>
                  <Grid item xs={12}>
                    <label>
                    <TextField type="email" name="email" placeholder="Enter email" label="Email" variant="filled" fullWidth required />
                    </label>
                  </Grid>
                  <Grid item xs={12}>
                    <label>
                    <TextField type="phone" name="phone" placeholder="Enter phone number" label="Phone" variant="filled" fullWidth />
                    </label>
                  </Grid>
                  <Grid item xs={12}>
                    <label>
                    <TextField color="primary" type="message" name="message" label="Message" multiline rows={4} placeholder="Type your message here" variant="filled" fullWidth required />
                    </label>
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth>Send</Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </motion.div></div>
      </>
  );
}