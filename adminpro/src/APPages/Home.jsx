import React from 'react';
import {motion} from 'framer-motion';
import FileDrawer from '../APAssets/FileDrawer.jpg';

export default function Home() {

  const transition = { duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]};
  const text = { 
    hidden:{
      y:1000,
      opactiy:0,
    },
    unhidden:{
      y:0,
      opacity:1,
    }
  }
  const img={ 
    hidden:{
      opacity:0.1
    },
    unhidden:{
      opacity:0.6,
      transition:{duration:1.4, ease:[0.6, 0.01, -0.05, 0.9]},
    }
  }
  

  return (
  <>

  <motion.img 
    animate={{ y: 0, width: "70%", transition: { delay: 0.2, ...transition } }}
    initial={{ width:"100%", y: "-15%" }}
    style={{}}
    className="imgcenterer"
    src="https://i2.lensdump.com/i/tp3vIb.png"
    alt="tp3vIb.png" border="0"/>

    <motion.div>
      <motion.img variants={img} initial={"hidden"} whileInView={"unhidden"}
        viewport={{once:false, amount:0.6}}
        src={FileDrawer} className="BGimg" />
      <motion.div variants={text} initial={"hidden"} animate={"unhidden"}
        transition={{staggerChildren:1}}>
        <motion.h2 variants={text} transition={transition} className="lead"> Be at the top of your game.<br/> Hire a virtual assistant! </motion.h2>
        <motion.p variants={text} transition={transition} className="sub"> At Admin Professional we provide specialised office administrative support to business owners’- professional entities to achieve their administrative goals. </motion.p>
      </motion.div>
    </motion.div>

  </>
  );
}