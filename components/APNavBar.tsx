
'use client'
import {motion} from 'framer-motion';
import {useRouter} from 'next/navigation';
import {SetStateAction, useState} from 'react'
//REMOVE ANCHORELNAV FOR FRAMER MOTION MOTION.UL
const APNavBar = () =>{

    const transition = { duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]};

    const [anchorElNav, setAnchorElNav] = useState<EventTarget & HTMLButtonElement | null>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElNav(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const router = useRouter();
      const link = (page: string) => {
        var url = page.replace(/\s+/g, '');
        router.push("/"+url);
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

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
                        <motion.div key={page} onClick={()=>{handleCloseNavMenu(); link(page)}}>
                            <motion.div style={{textAlign: 'center'}}>{page}</motion.div>
                        </motion.div>
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