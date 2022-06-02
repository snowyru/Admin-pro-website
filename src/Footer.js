import * as React from 'react';
import { Image } from 'react-native-web';
import lOGO from './LOGO.png';
import {ReactComponent as undraw1} from './undraw1.svg';

export default function StickyFooter() {
  return (
        <>
          <footer style={{"marginTop":"-6px"}} className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Admin Professional</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#">Out Team</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                    </div>
                    <div className="footer-col">
                    {/* Spacer */}
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
}