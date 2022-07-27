import React from 'react';
import {motion} from 'framer-motion';
import Typer from '../APAssets/Typer.jpg';
import RedFiles from '../APAssets/RedFiles.jpg';
import FileDrawer from '../APAssets/FileDrawer.jpg';
import { useIsSmall } from '../FramerHook';

export default function Home() {

  const transition = { duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]};
  const isSmall = useIsSmall();
  const variants = isSmall ?
  {
    animate:{
      y:0,
      width: "100%",
      transition: {transition: { delay: 0.2, ...transition }}
    }
  }
  :
  {
    animate:{
      y:0,
      width: "100%",
      transition: { delay: 0.2, ...transition }
    }
  }
  

  return (
  <>

  <motion.img 
    variants={variants}
    animate={{ y: 0, width: "70%", transition: { delay: 0.2, ...transition } }}
    initial={{ width:"100%", y: "-15%" }}
    style={{}}
    className="imgcenterer"
    src="https://i2.lensdump.com/i/tp3vIb.png"
    alt="tp3vIb.png" border="0"/>

    <motion.div>
      <motion.img src={FileDrawer} className="BGimg" />
      <motion.h2 className="h2" > Be at the top of your game. Hire a virtual assistant! </motion.h2>
    </motion.div>

  <motion.img src={RedFiles} className="leftSVG" initial={{ opacity: 0, x: -800 }}
    animate={{ x: 0, opacity: 1, transition: { duration: 1, ...transition } }} />

  <motion.img src={Typer} className="rightSVG" initial={{ opacity: 0, x: 800 }}
    animate={{ x: 0, opacity: 1, transition: { duration: 1, ...transition } }} />

  </>
  );
}