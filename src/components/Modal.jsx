import React from 'react';

const Modal = ({ isOpen, onClose, image }) => {
  if (!isOpen || !image) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-4 max-w-4xl w-full mx-4'>
        <img src={image.image} alt={image.alt} className='w-full h-auto object-contain rounded-lg' />
        <button 
          onClick={onClose} 
          className='absolute top-4 right-4 bg-goldenrod text-black px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-600 transition-colors duration-300'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
