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
            img: isMobile ? "/images/featured/taylor_1.jpeg" : "/images/featured/slide_one.jpg",
            lineOne: 'Taylor Swift',
            lineTwo: 'The Eras Tour',
            linkTo: '/shop',
            linkTitle: 'Buy Tickets Now!!',
        },
        {
            img: isMobile ? "/images/featured/taylor_2.jpeg" : "/images/featured/slide_two.jpg",
            lineOne: 'Taylor Swift',
            lineTwo: 'The Eras Tour',
            linkTo: '/shop',
            linkTitle: 'Buy Tickets Now!!',
        },
        {
            img: isMobile ? "/images/featured/taylor_3.jpg" : "/images/featured/slide_three.jpg",
            lineOne: 'Taylor Swift',
            lineTwo: 'The Eras Tour',
            linkTo: '/shop',
            linkTitle: 'Buy Tickets Now!!',
        },
    ];

    return (
        <Sliders items={corrouselItems} />
    );
};

export default Carrousel;
