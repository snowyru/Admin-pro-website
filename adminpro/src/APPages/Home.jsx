import React from 'react';
import {motion} from 'framer-motion';
import FileDrawer from '../APAssets/FileDrawer.jpg';
import HandShaker from '../APAssets/HandShaker.jpg';
import Typer from '../APAssets/Typer.jpg';

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
      scale:0.6,
      opacity:0.1
    },
    unhidden:{
      scale:1,
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

    <motion.div className="hideScroll flexer">
      <motion.img variants={img} initial={"hidden"} whileInView={"unhidden"}
        viewport={{once:false, amount:0.6}}
        src={FileDrawer} className="BGimg" />
      <motion.div variants={text} initial={"hidden"} animate={"unhidden"}
        transition={{staggerChildren:1}}>
        <motion.h2 variants={text} transition={transition} className="lead"> Be at the top of your game.<br/> Hire a virtual assistant! </motion.h2>
        <motion.p variants={text} transition={transition} className="sub"> At Admin Professional we provide specialised office administrative support to business owners’- professional entities to achieve their administrative goals. </motion.p>
      </motion.div>
    </motion.div>

    <motion.div className="flexer" >
     <motion.img variants={img} initial={"hidden"} whileInView={"unhidden"}
        viewport={{once:false, amount:0.6}}
        src={HandShaker} className="BGimg imgSpace" />
      <motion.div variants={text} initial={"hidden"} animate={"unhidden"}
        transition={{staggerChildren:1}}>
        <motion.h2 variants={text} transition={transition} className="lead"> How can we help you…? </motion.h2>
        <motion.p variants={text} transition={transition} className="sub"> Services offered range from:
        General front office administration,
        Co-ordination of seminars and registrations, general HR Administration, 
        Small project team administration logistics.

        For further information e-mail us at <a href='mailto:info@adminprofessional.co.za' target='blank' >info@adminprofessional.co.za</a> 
        </motion.p>
      </motion.div>
    </motion.div>

    <motion.div>
     <motion.img variants={img} initial={"hidden"} whileInView={"unhidden"}
        viewport={{once:false, amount:0.6}}
        src={Typer} className="BGimg imgSpace" />
      <motion.div variants={text} initial={"hidden"} animate={"unhidden"}
        transition={{staggerChildren:1}}>
        <motion.h2 variants={text} transition={transition} className="lead"> We are recommended </motion.h2>
        <motion.p variants={text} transition={transition} className="sub"> All our marketing is communicated via word-of-mouth. We operate as a small skilled team and bring value to business owners who understands the value of a skilled team. We understand that client information is highly confidential, and we treat each client with the highest integrity. We do not have social media pages but follow many professional and business individuals and groups to keep up to date with topical matters and trends. 
        </motion.p>
      </motion.div>
    </motion.div>
  </>
  );
}