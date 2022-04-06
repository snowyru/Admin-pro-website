import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Box } from '@mui/material';
import vidBG from './redBG.mp4'

function Home() {

    
    return(
        <>
            <video video autoPlay loop muted
                style={{  "position ":"absolute",
                    "z-index":" -2",
                    "top":"50%",
                    "left":"50%",
                    "width":"100%",
                    "height":"100%",
                    "object-fit":"cover",
                    "backgroundRepeat":"repeat-y"}}>
                    
                <source src={vidBG} type="video/mp4"/>
            </video>     
        </>
    )
}

export default Home;