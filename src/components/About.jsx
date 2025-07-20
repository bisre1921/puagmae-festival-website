import React, { useState } from 'react';
import aboutImage from '../assets/about-image.jpg';


const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='relative py-16 md:py-20 bg-ghost-white dark:bg-eerie-black text-vampire-black dark:text-ghost-white transition-colors duration-500' id='about'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Section */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-goldenrod'>
            About the Puagmae Festival
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          
          {/* Text Content */}
          <div className='space-y-6'>
            <p className='text-base md:text-lg leading-relaxed text-vampire-black dark:text-ghost-white'>
              The Puagmae Festival is a grand celebration of the African Golden 13th Month, a unique cultural event that brings together people from all walks of life to celebrate our rich heritage and traditions. From vibrant performances and cultural displays to delicious food and lively music, this festival is a true reflection of our diverse and colorful culture.
            </p>
            
            <p className='text-base md:text-lg leading-relaxed text-vampire-black dark:text-ghost-white'>
              Like the Egyptian Coptic calendar, the Ethiopian calendar has a year of 13 months. The first 12 months have 30 days each, and the last 13th month has 5 days and 6 days in a leap year. The name of the 13th month is in Ge'ez and is known as PAGUMIENE. This uniquely short but sweet month of PAGUMIENE just started here in Ethiopia and is going to last for the next six days or five days.
            </p>


          </div>

          {/* Image */}
          <div className='flex items-center justify-center'>
            <img 
              src={aboutImage} 
              alt='About Puagmae Festival' 
              className='rounded-xl shadow-2xl w-full h-auto max-w-md transform transition-transform duration-300 hover:scale-105'
            />
          </div>
        </div>

        {/* Learn More Button */}
        <div className='text-center mt-10 md:mt-12'>
          <button 
            onClick={handleReadMore}
            className='bg-goldenrod text-eerie-black dark:text-eerie-black px-8 py-3 rounded-lg text-base md:text-lg font-semibold shadow-lg hover:bg-yellow-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105'
          >
            {isExpanded ? 'Read Less' : 'Learn More'}
          </button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className='mt-10 md:mt-12'>
            <div className='bg-ghost-white dark:bg-eerie-black/90 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-goldenrod/20 max-w-4xl mx-auto'>
              <div className='space-y-6'>
                <p className='text-base md:text-lg leading-relaxed text-vampire-black dark:text-ghost-white'>
                  At the heart of the Puagmae Festival is the aspiration to represent collective cultural knowledge in a grassroots way. This approach encourages the free and informed participation of tradition bearers who it is hoped will play a central role in the shape of the festival's development and overall outcome.
                </p>
                
                <p className='text-base md:text-lg leading-relaxed text-vampire-black dark:text-ghost-white'>
                  The Puagmae Festival is an opportunity for people to come together and share their stories, traditions, and customs. The festival features a variety of events including traditional dance performances, music concerts, art exhibitions, and food fairs. These events provide a platform for artists and performers to showcase their talents and for attendees to immerse themselves in the rich cultural tapestry of Ethiopia.
                </p>
                
                <p className='text-base md:text-lg leading-relaxed text-vampire-black dark:text-ghost-white'>
                  One of the highlights of the festival is the traditional coffee ceremony, which is an integral part of Ethiopian culture. The ceremony involves roasting coffee beans, grinding them, and brewing the coffee in a special pot called a jebena. This ritual is a symbol of hospitality and community, bringing people together to enjoy the rich flavors and aromas of Ethiopian coffee.
                </p>
                
                <p className='text-base md:text-lg leading-relaxed text-vampire-black dark:text-ghost-white'>
                  The festival also includes cultural sharing from all over African countries, where participants can learn about different customs, languages, and traditions. There are also lively music performances featuring traditional and contemporary African music, fashion shows showcasing vibrant African attire, and cultural trade where artisans and traders display their unique crafts and goods.
                </p>
                
                <p className='text-base md:text-lg leading-relaxed text-vampire-black dark:text-ghost-white'>
                  The Puagmae Festival is not just a celebration of the past but also a time to look forward to the future. It provides a space for dialogue and exchange, fostering a sense of unity and shared identity among participants. Whether you are a local resident or a visitor, the Puagmae Festival offers a unique and enriching experience that will leave you with lasting memories.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
