import React, { useState } from 'react';
import { services } from '../constants';
import Modal from './Modal';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [visibleServices, setVisibleServices] = useState(3);

  const handleLearnMoreClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleLoadMore = () => {
    setVisibleServices((prev) => prev + 3);
  };

  const handleReadLess = () => {
    setVisibleServices((prev) => (prev - 3 > 3 ? prev - 3 : 3));
  };

  return (
    <div className="relative py-20 pb-28 bg-ghost-white dark:bg-eerie-black text-vampire-black dark:text-ghost-white transition-colors duration-500" id='services'>
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-5xl font-extrabold mb-16 text-center text-goldenrod">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.slice(0, visibleServices).map((service, index) => (
          <div key={index} className="bg-ghost-white dark:bg-eerie-black border border-goldenrod/20 rounded-lg shadow-lg flex flex-col overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg mb-4 flex-grow text-vampire-black dark:text-ghost-white">{service.description}</p>
              <button
                onClick={() => handleLearnMoreClick(service)}
                className="bg-goldenrod text-eerie-black dark:text-eerie-black px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-600 transition-colors duration-300 mt-auto"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        {visibleServices < services.length && (
          <button
            onClick={handleLoadMore}
            className="bg-goldenrod text-eerie-black dark:text-eerie-black px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-600 transition-colors duration-300 mr-4"
          >
            Other Services
          </button>
        )}
        {visibleServices > 3 && (
          <button
            className="bg-eerie-black text-ghost-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-eerie-black/80 transition-colors duration-300"
            onClick={handleReadLess}
          >
            Less Services
          </button>
        )}
      </div>
    </div>
  
    {selectedService && (
      <Modal 
        isOpen={!!selectedService}
        onClose={closeModal}
        service={selectedService}
      />
    )}
  </div>
  
  );
};

export default Services;
