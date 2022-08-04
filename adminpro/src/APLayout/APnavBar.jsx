import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { motion } from 'framer-motion';

const pages = ['Home', 'About us', 'Contact us'];

const APnavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const transition = { duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]};

  const anNavBar ={ 
    initial:{
      opacity:0,
      y : -1000,
    },
    animate :{ 
      y:0,
      opacity:1,
      transition: {duration:1, ...transition}
    }
  }

  return (
    <>
    <motion.div initial={{opacity:0, y:-220}} animate={{y:0, opacity:1, transition: {duration:1, ...transition}}} id="top">
      
    <AppBar position="sticky" sx={{ bgcolor: "#3B3F3F" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="https://i2.lensdump.com/i/tp3GnH.png" alt="tp3GnH.png" border="0" width="6%" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'source-code-pro',
              fontWeight: 700,
              letterSpacing: '.01rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Admin Professional
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'source-code-pro',
              fontWeight: 700,
              letterSpacing: '.01rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Admin Professional
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </motion.div>
  </>
  );
};
export default APnavBar;
