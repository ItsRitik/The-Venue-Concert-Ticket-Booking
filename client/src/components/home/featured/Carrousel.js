import React, { useState, useEffect } from 'react';
import Sliders from '../../utils/sliders';

const Carrousel = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mobileMediaQuery = window.matchMedia('(max-width: 767px)'); // Adjust the breakpoint as needed

        const handleMobileChange = (event) => {
            setIsMobile(event.matches);
        };

        mobileMediaQuery.addEventListener('change', handleMobileChange);
        setIsMobile(mobileMediaQuery.matches);

        return () => {
            mobileMediaQuery.removeEventListener('change', handleMobileChange);
        };
    }, []);

    const corrouselItems = [
        {
            img: isMobile ? "/images/featured/cold_1.jpg" : "/images/featured/coldplay_1.jpg",
            lineOne: 'The Coldplay',
            lineTwo: 'A Head Full of Dreams',
        },
        {
            img: isMobile ? "/images/featured/cold_2.jpeg" : "/images/featured/coldplay_2.jpg",
            lineOne: 'The Coldplay',
            lineTwo: 'A Head Full of Dreams',
        },
        {
            img: isMobile ? "/images/featured/cold_3.jpg" : "/images/featured/coldplay_3.jpg",
            lineOne: 'The Coldplay',
            lineTwo: 'A Head Full of Dreams',
        },
    ];

    return (
        <Sliders items={corrouselItems} />
    );
};

export default Carrousel;
