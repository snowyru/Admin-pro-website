
import {motion} from 'framer-motion';

const APNavBar = () =>{

    const transition = { duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]};

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      let Navigate = useNavigate();
      const link = (page) => {
        var url = page.replace(/\s+/g, '');
        Navigate("/"+url);
      };


    return (
    <>
        <motion.div exit={{y:-50, opacity:0, transition: { delay: 0.2, ...transition }}} initial={{opacity:0, y:-220}} animate={{y:0, opacity:1, transition: {duration:1, ...transition}}} id="top">
            <header className="app-bar" style={{ backgroundColor: "#3B3F3F" }}>
                <motion.div className="container mxauto">
                <motion.div className="toolbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px' }}>
                    <img src="https://i2.lensdump.com/i/tp3GnH.png" alt="tp3GnH.png" width="6%" />
                    <motion.a
                    className="h6 no-wrap"
                    href="/"
                    style={{
                        marginRight: '2px',
                        display: 'none',
                        fontFamily: 'source-code-pro',
                        fontWeight: 700,
                        letterSpacing: '.01rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    >
                    Admin Professional
                    </motion.a>

                    <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <motion.button
                        className="large-button"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </motion.button>
                    <motion.div
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
                        style={{ display: 'block', }}
                    >
                        {pages.map((page) => (
                        <MenuItem key={page} onClick={()=>{handleCloseNavMenu(); link(page)}}>
                            <Typography style={{textAlign: 'center'}}>{page}</Typography>
                        </MenuItem>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            <motion.a
                className="h5 no-wrap"
                href="/"
                style={{
                marginRight: '2px',
                display: 'flex',
                flexGrow: 1,
                fontFamily: 'source-code-pro',
                fontWeight: 700,
                letterSpacing: '.01rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Admin Professional
            </motion.a>

            <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                {pages.map((page) => (
                <button
                    key={page}
                    onClick={()=>{handleCloseNavMenu(); link(page)}}
                    style={{ marginTop: '2px', color: 'white', display: 'block', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', }}
                >
                    ~ {page} ~
                </button>
                ))}
            </div>
            </motion.div>
        </header>
        </motion.div>
    </>
    );
}

export default APNavBar;