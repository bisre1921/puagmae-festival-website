import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import backgroundImage from '../assets/home-background.jpg';
import { FaRegClock, FaArrowDown } from 'react-icons/fa';

// TESTING: Set event dates relative to when the component is loaded
// Set event dates for the countdown
const eventStartDateTest = new Date('2025-09-06T06:00:00'); // September 6, 2025, 6:00 AM
const eventEndDateTest = new Date('2025-09-11T00:00:00');   // September 11, 2025, 12:00 AM

const Home = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'An Epic Festival Awaiting Your Presence',
        'Join Us for Unforgettable Celebrations',
        'Experience the African Golden 13th Month',
        'A Cultural Extravaganza Like No Other'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeRemaining() {
    const now = new Date();
    const eventStartDate = eventStartDateTest;
    const eventEndDate = eventEndDateTest;
    let difference, status;

    if (now < eventStartDate) {
      difference = eventStartDate - now;
      status = 'before';
    } else if (now >= eventStartDate && now < eventEndDate) {
      difference = eventEndDate - now;
      status = 'live';
    } else {
      difference = 0;
      status = 'ended';
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, status };
  }

  const isLive = timeRemaining.status === 'live';
  const isEnded = timeRemaining.status === 'ended';

  return (
    <div
      className='relative min-h-screen bg-cover bg-top flex items-center justify-center px-4 scale-105 mt-20'
      id='home'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Simple, clean overlay */}
      <div className='absolute inset-0 bg-black/50'></div>
      
      <div className='relative text-center text-white max-w-4xl mx-auto'>
        {/* Main heading - simplified and more readable */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
          Join Us to Celebrate <br />
          the African <span className='text-goldenrod'>Golden</span> 13th Month
        </h1>
        

        {/* Typed text - simplified */}
        <div className='mb-12'>
          <span
            ref={typedElement}
            className='block text-xl md:text-2xl font-medium text-goldenrod'
          ></span>
        </div>

        {/* Countdown timer - refined and cleaner */}
        {!isEnded ? (
          <div className={
            isLive
              ? 'bg-yellow-400 rounded-2xl p-6 md:p-8 mb-8 max-w-3xl mx-auto border-4 border-yellow-700 shadow-2xl animate-pulse'
              : 'bg-black/40 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 max-w-3xl mx-auto border border-goldenrod/20 shadow-xl'
          }>
            <h2 className={
              isLive
                ? 'text-xl md:text-2xl font-bold mb-6 flex items-center justify-center text-white drop-shadow-lg'
                : 'text-xl md:text-2xl font-bold mb-6 flex items-center justify-center text-goldenrod'
            }>
              <FaRegClock className='mr-2 text-xl md:text-2xl' />
              {isLive ? 'The Festival is LIVE! Ends in:' : 'Countdown to the Festival'}
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4'>
              {[
                { value: timeRemaining.days, label: 'Days' },
                { value: timeRemaining.hours, label: 'Hours' },
                { value: timeRemaining.minutes, label: 'Minutes' },
                { value: timeRemaining.seconds, label: 'Seconds' }
              ].map((item, index) => (
                <div key={index} className={
                  isLive
                    ? 'bg-white/90 rounded-lg p-3 md:p-4 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110'
                    : 'bg-goldenrod rounded-lg p-3 md:p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105'
                }>
                  <span className={
                    isLive
                      ? 'block text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-700 mb-1'
                      : 'block text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1'
                  }>
                    {item.value.toString().padStart(2, '0')}
                  </span>
                  <div className={
                    isLive
                      ? 'text-xs md:text-sm font-semibold text-yellow-900/80 uppercase tracking-wide'
                      : 'text-xs md:text-sm font-semibold text-black/80 uppercase tracking-wide'
                  }>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='bg-black rounded-2xl p-10 mb-8 max-w-3xl mx-auto border-4 border-goldenrod text-center text-goldenrod text-3xl font-extrabold shadow-[0_8px_32px_rgba(0,0,0,0.35)]'>
            The Festival has ended. See you next year!
          </div>
        )}

        {/* Simple call to action */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <button className='bg-goldenrod text-black px-6 py-3 rounded-lg font-semibold border border-goldenrod hover:bg-transparent hover:text-goldenrod transition-colors duration-300 transform hover:scale-105'>
            Get Tickets
          </button>
          <button className='border border-goldenrod text-goldenrod px-6 py-3 rounded-lg font-semibold hover:bg-goldenrod hover:text-black transition-colors duration-300 transform hover:scale-105'>
            Learn More
          </button>
        </div>


      </div>
    </div>
  );
};

export default Home;
