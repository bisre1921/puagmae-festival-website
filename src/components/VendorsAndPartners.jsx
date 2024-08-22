import React from 'react';
import { vendors } from '../constants';
import "../index.css"

const VendorsAndPartners = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-800 to-black py-24">
      <div className="max-w-6xl mx-auto text-center px-8">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-goldenrod mb-16">
        Our Trusted Vendors & Partners
      </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 flex items-center justify-center h-64"
            >
              <div className="relative z-10 p-4 flex flex-col items-center justify-center">
                <img
                  src={vendor.logo}
                  alt={vendor.name}
                  className="w-36 h-36 object-contain"
                />
                <h3 className="text-xl font-bold text-white text-center mt-4">
                  {vendor.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorsAndPartners;
