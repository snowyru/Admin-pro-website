import React from 'react';
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <>
      <div className="App"> 
        <Typography gutterBottom variant="h3" align="center">
        </Typography>
        <Grid>
          <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Contact Us Form
            </Typography> 
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                Fill up the form and our team will get back to you within 24 hours.
            </Typography> 
              <form name="contact" netlify >
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField name="firstName" placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField name="lastName" placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="email" type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="phone" type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="message" label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                  </Grid>

                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </>
  );
}