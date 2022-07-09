import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export default function Start2Home() {

    useEffect(()=> {
        setTimeout(function(){
            console.log('hello?');
            window.location.replace("/home")
        }, 5000)
    }, []);

  return (
    <div>Start2Home</div>
  )
}
