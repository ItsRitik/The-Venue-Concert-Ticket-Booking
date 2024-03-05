import React from 'react';
import Slider from 'react-slick';
import { WavesButton } from './tools';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sliders = ({ items }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
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
                              <div className=" title  bg-gradient-to-r from-amber-100 to-slate-300   p-2 text-2xl  uppercase sm:text-6xl   font-bold">
                                  {item.lineOne}
                              </div>
                              <div className="tag low_title bg-gradient-to-r from-amber-100 to-slate-300  p-2 text-md uppercase sm:text-2xl  font-bold mt-2">
                                  {item.lineTwo}
                              </div>


                          </div>
                      </div>
                  </div>
              ))
            : null;

    return <Slider {...settings}>{generateSlides()}</Slider>;
};

export default Sliders;