import React, { useState, useEffect, useCallback } from 'react';
import { Slide } from 'react-awesome-reveal';

const TimeUntil = () => {
  const [time, setTime] = useState({
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  });

  const renderItem = (time, value) => (
    <div className="countdown_item">
      <div className="countdown_time text-4xl px-4 md:text-5xl lg:text-6xl">
        {time}
      </div>
      <div className="countdown_tag text-lg px-4 md:text-xl lg:text-2xl">{value}</div>
    </div>
  );

  const getTimeUntil = useCallback((deadline) => {
    const timeDifference = Date.parse(deadline) - Date.parse(new Date());

    if (timeDifference < 0) {
      setTime({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0',
      });
      console.log('The event has already started.');
    } else {
      const seconds = Math.floor((timeDifference / 1000) % 60);
      const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      setTime((prevTime) => ({
        ...prevTime,
        days: String(days),
        hours: String(hours),
        minutes: String(minutes),
        seconds: String(seconds),
      }));
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => getTimeUntil('Mar 15, 2024 15:20:00'), 1000);

    return () => clearInterval(intervalId);
  }, [getTimeUntil]);

  return (
    <Slide left delay={1000} triggerOnce>
      <div className="countdown_wrapper text-white md:text-black">
        <div className="countdown_top bg-orange-500 md:bg-ff4800 text-lg md:text-xl lg:text-2xl py-2 px-4 md:py-4 md:px-8 inline-block uppercase">
          Event starts in
        </div>
        <div className="countdown_bottom flex bg-red-500 md:bg-d93d00 py-2 px-6 md:py-4 md:px-8">
          {renderItem(time.days, 'Days')}
          {renderItem(time.hours, 'HS')}
          {renderItem(time.minutes, 'Min')}
          {renderItem(time.seconds, 'Sec')}
        </div>
      </div>
    </Slide>
  );
};

export default TimeUntil;
