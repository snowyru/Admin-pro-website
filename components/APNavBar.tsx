'use client'
import {motion} from 'framer-motion';
import {useRouter} from 'next/navigation';
import {SetStateAction, useState} from 'react'
//REMOVE ANCHORELNAV FOR FRAMER MOTION MOTION.UL
const APNavBar = () =>{

    const transition = { duration: 1.4, ease:[0.680, -0.550, 0.265, 1.550]};

    const [isOpen, setisOpen] = useState(false);

    const handleToggleMenu = () => {
        setisOpen(!isOpen);
    };

    const router = useRouter();
    const link = (page: string) => {
    // var url = page.replace(/\s+/g, '');
    router.push(page);
    };

    const pages = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/Contact" },
      ];


    return (
    <>
        <motion.div exit={{y:-50, opacity:0, transition: { delay: 0.2, ...transition }}} initial={{opacity:0, y:-220}} animate={{y:0, opacity:1, transition: {transition}}} id="top">
            <motion.header className="app-bar" style={{ backgroundColor: "#3B3F3F" }}>
                <motion.div className="container mxauto">
                    <motion.div className="toolbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px' }}>
                        <motion.img src="https://i2.lensdump.com/i/tp3GnH.png" alt="tp3GnH.png" width="6%" />
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

                            {/* Hide the dropdown menu button for PCs using the hidden class from Tailwind CSS */}
                            <motion.button
                                className="bg-gray-300 p-2 rounded-md hidden sm:block md:hidden"
                                onClick={handleToggleMenu}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </motion.button>
                            {/* Display the pages in the navbar for PCs */}
                            <motion.div
                                style={{
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                }}
                            >
                                {pages.map((page) => (
                                <motion.button
                                    key={page.name}
                                    onClick={() => link(page.link)}
                                    style={{marginTop: "2px", color: "white", display:"block", backgroundColor:"transparent",border:"none",cursor:"pointer",
                                    }}
                                >
                                    ~ {page.name} ~
                                </motion.button>
                                ))}
                            </motion.div>

                        <motion.div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            {isOpen && ( 
                                <motion.ul
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 50 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute bg-black shadow-md rounded-md p-2 mt-2 hidden sm:block md:hidden"
                                    >
                                    {/* Map the pages array to display the page names and links in the dropdown menu */}
                                    {pages.map((page) => (
                                            <li
                                            key={page.name}
                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => link(page.link)}
                                            >
                                            {page.name}
                                            </li>
                                        ))}
                                </motion.ul>
                            )}
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.header>
        </motion.div>
    </>
    );
}

export default APNavBar;