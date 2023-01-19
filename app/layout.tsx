'use client'

import Link from 'next/link';
import './globals.css';
import Image from 'next/image';

//REACT
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import React from 'react';
import NavIcon from '../Public/APAssets/NavIcon.png';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  const pages = ['Home', 'About us', 'Contact us'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: { currentTarget: React.SetStateAction<null>; }) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // let Navigate = useNavigate();
  // const link = (page: string) => {
  //   var url = page.replace(/\s+/g, '');
  //   Navigate("/"+url);
  // };

  const transition = { duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]};
  
  return (
    <html>
      <body>
        <main>
          <nav>
            {/* <motion.div exit={{y:-50, opacity:0, transition: { delay: 0.2, ...transition }}} initial={{opacity:0, y:-220}} animate={{y:0, opacity:1, transition: {...transition}}} id="top"> */}
            <div>
            <AppBar position="sticky" sx={{ bgcolor: "#3B3F3F" }}>
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <div style={{width:"6%"}} >
                    <Image src={NavIcon} alt="tp3GnH.png" width={100} height={100} />
                    </div>
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
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      // onClick={handleOpenNavMenu}
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
                        <MenuItem key={page}
                        //  onClick={()=>{handleCloseNavMenu(); link(page)}}
                        >
                          <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
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
                        // onClick={()=>{handleCloseNavMenu(); link(page)}}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                      ~ {page} ~
                      </Button>
                    ))}
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
          </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
