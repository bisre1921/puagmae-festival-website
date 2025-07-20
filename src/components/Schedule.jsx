import React, { useState } from 'react';
import { scheduleData } from '../constants';
import { FaCalendarDay } from 'react-icons/fa';

const Schedule = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedEvent(expandedEvent === index ? null : index);
  };

  return (
    <div className='relative py-20 pb-28 bg-ghost-white dark:bg-eerie-black text-vampire-black dark:text-ghost-white transition-colors duration-500' id='schedule'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-5xl font-extrabold mb-12 text-center text-goldenrod dark:text-goldenrod'>
          Festival Schedule
        </h2>
        <div className='flex flex-col space-y-8'>
          {scheduleData.map((event, index) => (
            <div key={index} className='bg-ghost-white dark:bg-eerie-black/90 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-goldenrod/20'>
              <div className='relative p-6 flex items-start'>
                <FaCalendarDay className='text-goldenrod text-4xl mr-4 mt-2' />
                <div className='flex-1'>
                  <h3 className='text-3xl font-bold'>{event.date}</h3>
                  <h4 className='text-2xl font-semibold mb-2'>
                    {event.title.split(' ').map((word, i) =>
                      word.toLowerCase() === 'golden' ? (
                        <span key={i} className='text-goldenrod dark:text-goldenrod'>{word} </span>
                      ) : (
                        word + ' '
                      )
                    )}
                  </h4>
                  <div className='text-lg leading-relaxed'>
                    {expandedEvent === index ? (
                      <div className='bg-ghost-white dark:bg-eerie-black/95 p-4 rounded-md'>
                        <p className='font-semibold text-goldenrod mb-2'>Activities to be conducted on that day:</p>
                        {event.detailDescription} 
                      </div>
                    ) : (
                      <p>{event.description}</p>
                    )}
                  </div>
                  <button
                    className="bg-goldenrod text-eerie-black dark:text-eerie-black px-4 py-2 rounded-md font-semibold shadow-lg hover:bg-yellow-600 transition-colors duration-300 mt-6"
                    onClick={() => toggleReadMore(index)}
                  >
                    {expandedEvent === index ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
