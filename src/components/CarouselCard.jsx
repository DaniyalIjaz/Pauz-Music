import React, { useRef, useState } from 'react';
import './CarouselCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function CarouselCard() {
  const sliderRef = useRef(null); // Ref for the slider
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide index

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => {
      setCurrentSlide(current); // Update current slide index
    }
  };

  // Move to the previous slide
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Move to the next slide
  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {[1, 2, 3].map((_, index) => (
          <div key={index}>
            <div className="CarouselCardMain">
              <div className="CarouselCard">
                <div className="eventbtnn">
                  <h4 className='eventbtnnh4'>TESTIMONIALS</h4>
                  <h2 className='eventbtnnh2'>What They Are Talking</h2>
                  <h2 className='eventbtnnh22'>About Gana</h2>
                </div>

                {/* Carousel buttons */}
                <div className="carouselButtons">
                  {currentSlide > 0 && (
                    <button className="button" onClick={slideLeft}>
                      <div className="button-box">
                        <span className="button-elem">
                          <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                  )}
                  {currentSlide < 2 && ( // Show the right button only if not on the last slide
                    <button className="button" style={{ transform: 'scaleX(-1)' }} onClick={slideRight}>
                      <div className="button-box">
                        <span className="button-elem">
                          <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                  )}
                </div>
              </div>
              {/* bracket */}
              <div className="carouselDetails">
                <div className="carouselDetailsImg">
                  <img src="/Images/Carousel.png" alt="" />
                  <img className='carouselPositionImg' src="/Images/Svgs/Commas.svg" alt="" />
                </div>

                <img className='bracketsCarousel' src="/Images/Bracket.png" alt="" />

                <div className="carouselRightSection">
                  <div className="starSvgs">
                    <img src="/Images/Svgs/star.svg" width={20} height={20} alt="" />
                    <img src="/Images/Svgs/star.svg" width={20} height={20} alt="" />
                    <img src="/Images/Svgs/star.svg" width={20} height={20} alt="" />
                    <img src="/Images/Svgs/star.svg" width={20} height={20} alt="" />
                    <img src="/Images/Svgs/star.svg" width={20} height={20} alt="" />
                  </div>
                  <h4>Meat shops typically offer a variety of meats, including beef, pork, chicken, lamb, and sometimes specialty meats like game or exotic meats.  Yes, meat shops often specialize in selling fresh cuts of meat. like sausages</h4>
                  <h3>JHON SURIA</h3>
                  <h5>Marketing Manager</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default CarouselCard;
