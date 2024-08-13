import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { galleryData } from '../constants';
import "../index.css"

const Gallery = () => {
  return (
    <div className="gallery-section bg-gradient-to-b from-black via-gray-800 to-black py-10" id="gallery">
      <h1 className="text-4xl md:text-5xl text-center font-extrabold text-white mb-8">
        Gallery
      </h1>
      <div className="max-w-6xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation
          pagination={{ type: "progressbar" }}
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          autoplay={{ delay: 2500 }}
          className="rounded-lg overflow-hidden"
          breakpoints={{
            640: {
              slidesPerView: 1, // For devices with a width of 640px or less
            },
            860: {
              slidesPerView: 2, // For devices with a width of 860px or more
            },
          }}
        >
          {galleryData.map((gallery, index) => (
            <SwiperSlide key={index}>
              <img
                src={gallery.image}
                alt={gallery.alt}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
