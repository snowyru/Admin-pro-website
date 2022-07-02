import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBRipple,
  MDBBtn
} from 'mdb-react-ui-kit';
import OfficeHelp from '../APAssets/OfficeHelp.svg';

export default function Home() {
  return (
    <>
        <div class="bg-image hover-overlay hover-zoom hover-shadow ripple">
            <img src="https://i2.lensdump.com/i/tp3vIb.png" class="w-100 max-width: 70%" />
            <a href="">
                <div class="mask" style={{backgroundColor : "rgba(59,0,12, 0.9)"}}>
                        <br/>
                        <br/>
                        <br/>
                        <h1 class="display-1 text-center text-white" >Admin Professional</h1> 
                        <h1 class="display-2 text-center text-white" >Be at the top of your game.</h1> 
                        <h1 class="display-4 text-center text-white" >Hire a virtual assistant!</h1>
                 </div>
            </a>
        </div>
        {/* Start Carousel Component  */}
            <MDBCarousel showIndicators dark fade>
            <MDBCarouselInner>
                <MDBCarouselItem className='active'>
                <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(19).webp' alt='...' />
                <MDBCarouselCaption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem>
                <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(51).webp' alt='...' />
                <MDBCarouselCaption className="text-danger">
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem>
                <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(42).webp' alt='...' />
                <MDBCarouselCaption className="text-white">
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
            </MDBCarousel>
        {/* End Carousel Component */}
        {/* Start of Gridl */}
        <br/>

        <MDBRow>
        <MDBCol md='6'>
            <br/>
            <div class='ms-5'>
                <h1 class="display-3 text-center text-light ms-2">How can we help you?</h1>
                <br/>
                <p class="blockquote text-center text-light">
                
                Services offered range from:
                General front office administration,
                Co-ordination of seminars and registrations, general HR Administration, 
                Small project team administration logistics.
                </p>
            </div>
        </MDBCol>
        <MDBCol md='6'>   
        <div className="d-flex justify-content-center ms-5">
            <MDBRipple rippleColor="danger" rippleDuration={1000} rippleRadius={100} rippleUnbound rippleTag='span'>
            <img class="img-fluid rounded hover-shadow ms-5" src={OfficeHelp} width='60%' alt="Office Help"/>
            </MDBRipple>
        </div>
        </MDBCol>
        </MDBRow>

        <br/>

        <div class='text-center'>
                <p class="blockquote text-center text-light">For more information please send us an e-mail at <br/> </p>
                <MDBBtn color="danger" ><a class="text-white" href="mailto:info@adminprofessional.net">
                info@adminprofessional.net</a></MDBBtn>
        </div>

        <span class="square border border-white border-4">
        {/* End of Gridl */}
        {/* Start of Feature */}
        <h1 class="text-center text-light">Our passion for giving back</h1>
        </span>
        {/* End of Feature */}
    </>
  );
}