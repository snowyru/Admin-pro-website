import React from 'react';
import {ReactComponent as OfficeHelp} from '../APAssets/OfficeHelp.svg';
import {ReactComponent as Gift} from '../APAssets/Gift.svg';
import {ReactComponent as Aphone} from '../APAssets/Aphone.svg';
import {ReactComponent as Phone2People} from '../APAssets/Phone2People.svg';
import {ReactComponent as Door} from '../APAssets/Door.svg';
import {ReactComponent as PhoneTouch} from '../APAssets/PhoneTouch.svg';
import {motion} from 'framer-motion';
import { useState } from 'react';

export default function Home() {

  const transition = { duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]};

  return (
  <>
    <motion.div>

      <motion.div initial={{opacity: 0, x:-400}} animate={{x: 0, opacity:1, transition: {duration:1, ...transition}}}>
      <Aphone className="leftSVG"/>
      </motion.div>
      <motion.div initial={{opacity: 0, x:400}} animate={{x: 0, opacity:1, transition: {duration:1, ...transition}}}>
      <PhoneTouch className="rightSVG" />
      </motion.div>

        <motion.img animate={{y:0, width:"60%", transition:{delay:0.2, ...transition}}}
        initial={{y:"-15%"}} 
        style={{}}
        className="imgcenterer"
        src="https://i2.lensdump.com/i/tp3vIb.png"
        alt="tp3vIb.png" border="0" width="100%"/>

    </motion.div>
  </>
  );
}