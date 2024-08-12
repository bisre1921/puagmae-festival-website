import React from 'react';
import indv from "./images/indv.jpg";

const testimonials = [
  {
    name: 'AAA aaa',
    title: 'CEO of A',
    testimonial: 'Amazing festival and fantastic organization. We couldn’t be happier with our experience at the Puagmae Festival!',
    image: indv, 
  },
  {
    name: 'BBB bbb',
    title: 'CTO B',
    testimonial: 'Amazing festival and fantastic organization. We couldn’t be happier with our experience at the Puagmae Festival!',
    image: indv, 
  },
  {
    name: 'CCC ccc',
    title: 'CTO C',
    testimonial: 'Amazing festival and fantastic organization. We couldn’t be happier with our experience at the Puagmae Festival!',
    image: indv,
  },
  {
    name: 'DDD ddd',
    title: 'CTO of Another Corp',
    testimonial: 'Amazing festival and fantastic organization. We couldn’t be happier with our experience at the Puagmae Festival!',
    image: indv, 
  },
  {
    name: 'EEE eee',
    title: 'CTO of E',
    testimonial: 'Amazing festival and fantastic organization. We couldn’t be happier with our experience at the Puagmae Festival!',
    image: indv, 
  },
  {
    name: 'FFF fff',
    title: 'CTO of F',
    testimonial: 'Amazing festival and fantastic organization. We couldn’t be happier with our experience at the Puagmae Festival!',
    image: indv, 
  },
  
];

const Testimony = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-purple-400 p-6 rounded-lg shadow-lg">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-700 text-center mb-4">"{testimonial.testimonial}"</p>
              <div className="text-center">
                <h3 className="text-lg font-medium">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimony;
