import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

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
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
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
            <a href="#top">Goint up?</a>
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}