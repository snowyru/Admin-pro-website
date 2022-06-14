import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption
} from 'mdb-react-ui-kit';

export default function Home() {
  return (
    <>
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
                <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp' alt='...' />
                <MDBCarouselCaption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem>
                <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(25).webp' alt='...' />
                <MDBCarouselCaption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
            </MDBCarousel>
        {/* End Carousel Component */}
    </>
  );
}