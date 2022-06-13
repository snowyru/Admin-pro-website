import * as React from 'react';
import { Link } from 'react-router-dom';

export default function StickyFooter() {
  return ( 
        <>
          <footer style={{"marginTop":"-6px"}} className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Admin Professional</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/OurTeam">Our Team</Link></li>
                            <li><Link to="/OurClients">Our Clients</Link></li>
                            <li><Link to="/ContactUs">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col"/>

                    <div className="footer-col"/>
                    {/* Spacers */}
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <Link to="https://www.linkedin.com"><i className="fab fa-linkedin-in"/></Link>
                        </div>
                    </div>
                </div>           
                            <div style={{"color": 'grey', "textAlign":"center"}}>
                                <p>All rights reserved. Copyright © 2022 Admin Professional.</p>        
                            </div> 
            </div>
        </footer>
    </>
  );
}