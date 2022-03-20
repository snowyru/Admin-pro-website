import { useEffect, useState } from 'react';
//import Card from "./Card";
import SimpleButton from './SimpleButton.js'


function AppWithUseEffect() {


    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(
        function() {

            if (loggedIn === true) {
                alert("User is logged in!")
            }
           
        },
        [ loggedIn ]
    );


    function login() {
        setLoggedIn(true);
    }

    return(
        <div>
            <button onClick={login} className='btn btn-primary'>Log In</button>
        </div>
    )
}

export default AppWithUseEffect;