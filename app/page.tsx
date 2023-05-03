'use client'
import {motion} from 'framer-motion';

const Home = () =>{
  
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
  };
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
  };
  
  const exit = { 
    opacity : 0,
    x : -400,
    transition:{duration: 1.4, ease:[0.6, 0.01, -0.05, 0.9]},
   };

  return(
    <>
      <motion.div drag initial={{x:0}} animate={{x:100}}>
        <h1>testing content animation</h1>
      </motion.div>  
    </>
  )
}

export default Home;