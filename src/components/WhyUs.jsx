import React from 'react';
import { FaHandshake , FaUsers, FaLightbulb, FaBullhorn, FaRocket } from 'react-icons/fa';
import { MdEqualizer } from 'react-icons/md';

const WhyUs = () => {
  const reasons = [
    {
      icon: <FaHandshake className="text-4xl text-goldenrod" />,
      title: 'We Encourage the Ideals of Unity',
      description: 'We foster a collaborative and unified approach to achieve common goals.',
    },
    {
      icon: <MdEqualizer className="text-4xl text-goldenrod" />,
      title: 'We Never Compromise Equality',
      description: 'Equality is at the core of our values, ensuring fair treatment and opportunities for all.',
    },
    {
      icon: <FaUsers className="text-4xl text-goldenrod" />,
      title: 'Reliable Audience Relationship',
      description: 'We build and maintain strong, trustworthy relationships with our audience.',
    },
    {
      icon: <FaLightbulb className="text-4xl text-goldenrod" />,
      title: 'Technology & Creativity',
      description: 'Combining cutting-edge technology with creative solutions to drive innovation.',
    },
    {
      icon: <FaRocket className="text-4xl text-goldenrod" />,
      title: 'We Are Highly Responsible',
      description: 'Our commitment to responsibility ensures that we deliver on our promises with integrity.',
    },
    {
      icon: <FaBullhorn className="text-4xl text-goldenrod" />,
      title: 'Continuous Improvement',
      description: 'We are dedicated to continuous improvement and striving for excellence in everything we do.',
    },
  ];

  return (
    <div className="why-us-section bg-gradient-to-b from-black via-gray-800 to-black py-12 text-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">What Makes Our Festival Unique</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
