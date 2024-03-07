import React from 'react';
import Slider from 'react-slick';
import { WavesButton } from './tools';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sliders = ({ items }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,        // Enable autoplay
        autoplaySpeed: 5000    // Set autoplay interval to 4 seconds (4000 milliseconds)
    };

    const generateSlides = () =>
        items
            ? items.map((item, i) => (
                  <div key={i}>
                      <div
                          className="featured_image bg-cover bg-center h-screen w-screen"
                          style={{
                              backgroundImage: `url(${item.img})`,
                          }}
                      >
                          <div className="featured_action absolute top-5 left-4 sm:top-1/2 sm:left-20">
                          <div className="title_line1 p-2 text-4xl uppercase sm:text-6xl font-bold">
                            <span>{item.lineOne}</span>
                        </div>
                              <div className="title_line1 tag p-2 text-md uppercase sm:text-2xl  font-bold mt-2">
                                  <span>{item.lineTwo}</span>
                              </div>


                          </div>
                      </div>
                  </div>
              ))
            : null;

    return <Slider {...settings}>{generateSlides()}</Slider>;
};

export default Sliders;
