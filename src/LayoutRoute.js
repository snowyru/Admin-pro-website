import { Route } from 'react-router-dom';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import React from 'react';

function LayoutRoute(props) {
    return (
        <>
            <div style={{"backgroundColor":"#403c3c"}}>
            <NavBar {...props} />
            <Route path={props.path} exact={props.exact} component={props.component} />
            <Footer {...props} />
            </div>        
        </>
    )
};

export default LayoutRoute;