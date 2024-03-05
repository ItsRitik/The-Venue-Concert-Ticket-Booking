import React, { useEffect } from 'react';
import Featured from './featured/index';
import VenueInfo from './venueNfo';
import Highlights from './highlights/index';
import Pricing from './pricing';
import Location from './location';
import { allticket } from '../../store/actions/ticket.actions';
import {  useDispatch } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch the action to fetch products when the component mounts
        dispatch(allticket());
      }, [dispatch]);

    return(
        <div>
            <Featured/>
            <VenueInfo/>
            {/* <Highlights/> */}
            <Pricing/>
            <Location/>
        </div>
    )

}

export default Home;