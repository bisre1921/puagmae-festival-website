import React from 'react';
import { reasons } from '../constants';


const WhyUs = () => {
 
  return (
    <div className="why-us-section bg-ghost-white dark:bg-eerie-black text-vampire-black dark:text-ghost-white py-20 pb-28 transition-colors duration-500" id="whyus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-goldenrod">What Makes Our Festival Unique</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 bg-ghost-white dark:bg-eerie-black/90 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border border-goldenrod/20">
              <div className="mb-4">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{reason.title}</h3>
              <p className="text-vampire-black dark:text-ghost-white">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;