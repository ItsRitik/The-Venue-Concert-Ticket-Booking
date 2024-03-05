import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './timeUntil';

const Featured = () => {
    return(
    
        <div className="featured_container">
        <Carrousel/>
         <TimeUntil/>
        </div>
    )
}

export default Featured;