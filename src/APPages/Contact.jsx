import React from 'react';
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
        src="https://i2.lensdump.com/i/tp3vIb.png"
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
                Fill up the form and our team will get back to you within 24 hours.
            </Typography> 
              <form name="contact v1" method="post" data-netlify="true" onSubmit="submit" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact v1"/>
                <div hidden>
                  <input name="bot-field"/>
                </div>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <label>
                    <TextField type="text" name="firstName" placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                    </label>                  
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <label>
                    <TextField type="text" name="lastName" placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                    </label>
                  </Grid>
                  <Grid item xs={12}>
                    <label>
                    <TextField name="email" type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                    </label>
                  </Grid>
                  <Grid item xs={12}>
                    <label>
                    <TextField name="phone" type="phone" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth />
                    </label>
                  </Grid>
                  <Grid item xs={12}>
                    <label>
                    <TextField color="primary" type="message" name="message" label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
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