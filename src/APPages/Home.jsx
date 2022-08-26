import React from 'react';
import {motion} from 'framer-motion';
import ProgressiveImage from 'react-progressive-image';
import FileDrawer from '../APAssets/FileDrawer.jpg';
import HandShaker from '../APAssets/HandShaker.jpg';
import Typer from '../APAssets/Typer.jpg';
import HandPlant from '../APAssets/HandPlant.jpg';
import LOGO from '../APAssets/LOGO.jpg';

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
      scale:0.85,
      opacity:0.1
    },
    unhidden:{
      scale:1,
      opacity:0.55,
      transition:{duration:1.4, ease:[0.6, 0.01, -0.05, 0.9]},
    }
  }
  
  const exit = { 
    opacity : 0,
    x : -400,
    transition:{duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]},
   }

  return (
  <>

  <motion.img exit={{width:"100%", y:"-15%", transition: { delay: 0.2, ...transition } }}
    animate={{ y: 0, width: "70%", transition: { delay: 0.2, ...transition } }}
    initial={{ width:"100%", y: "-15%" }}
    style={{}}
    className="TransLogo"
    src={LOGO}
    alt="tp3vIb.png" border="0"/>

    <motion.div exit={exit} className="hideScroll flexer Txt">
      <motion.img variants={img} initial={"hidden"} whileInView={"unhidden"}
        viewport={{once:false, amount:0.35}}
        src={FileDrawer} className="BGimghome" />
      <motion.div variants={text} initial={"hidden"} animate={"unhidden"}
        transition={{staggerChildren:1}}>
        <motion.h2 variants={text} transition={transition} className="lead"> Be at the top of your game.<br/> Hire a virtual assistant! </motion.h2>
        <motion.p variants={text} transition={transition} className="sub"> At Admin Professional we provide specialised office administrative support to business owners’- professional entities to achieve their administrative goals. </motion.p>
      </motion.div>
    </motion.div>

    <motion.div exit={exit} className="flexer Txt" >
     <motion.img variants={img} initial={"hidden"} whileInView={"unhidden"}
        viewport={{once:false, amount:0.6}}
        src={HandShaker} className="BGimghome imgSpace" />
      <motion.div variants={text} initial={"hidden"} animate={"unhidden"}
        transition={{staggerChildren:1}}>
        <motion.h2 variants={text} transition={transition} className="lead"> How can we help you…? </motion.h2>
        <motion.p variants={text} transition={transition} className="sub"> Services offered range from:
        General front office administration,
        Co-ordination of seminars and registrations, general HR Administration, 
        Small project team administration logistics.

        For further information e-mail us at <a href='mailto:info@adminprofessional.net' target='blank' >info@adminprofessional.net</a> 
        </motion.p>
      </motion.div>
    </motion.div>

    <motion.div exit={exit} className="imgContainer flexer Txt">
     <motion.img variants={img} initial={"hidden"} whileInView={"unhidden"}
        viewport={{once:false, amount:0.6}}
        src={Typer} className="BGimghome imgSpace" />
      <motion.div variants={text} initial={"hidden"} animate={"unhidden"}
        transition={{staggerChildren:1}}>
        <motion.h2 variants={text} transition={transition} className="lead"> We are recommended </motion.h2>
        <motion.p variants={text} transition={transition} className="sub"> All our marketing is communicated via word-of-mouth. We operate as a small skilled team and bring value to business owners who understands the value of a skilled team. We understand that client information is highly confidential, and we treat each client with the highest integrity. We do not have social media pages but follow many professional and business individuals and groups to keep up to date with topical matters and trends. 
        </motion.p>
      </motion.div>
    </motion.div>

    <motion.div exit={exit} className="imgContainer flexer Txt">
     <motion.img variants={img} initial={"hidden"} whileInView={"unhidden"}
        viewport={{once:false, amount:0.6}}
        src={HandPlant} className="BGimghome imgSpace" />
      <motion.div variants={text} initial={"hidden"} animate={"unhidden"}
        transition={{staggerChildren:1}}>
        <motion.h2 variants={text} transition={transition} className="lead"> Our passion for giving back </motion.h2>
        <motion.p variants={text} transition={transition} className="sub"> The mission of Admin Professional is not only to provide professional administrative support in line with best practices but to do this through the sustainable empowerment and development of communities. Our projects to date include stationary drives which are distributed to the underprivileged and noted we have sponsored over 700 hours of administrative assistance to the value of R 154 000,00. 
        </motion.p>
      </motion.div>
    </motion.div>
  </>
  );
}