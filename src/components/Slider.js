import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';



const Slider = ({ children, slidesPerView, className }) => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        el: '.swiper-pagination', // Add this line to customize the pagination element
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      slidesPerView={slidesPerView}
    >
      {children.map((ele, index) => (
        <SwiperSlide key={index + 1}>
          <img src={ele.img} alt="img" />
        </SwiperSlide>
      ))}

      {/* Add these styles to hide the pagination and navigation elements */}
      <style>
        {`
          .swiper-pagination,
          .swiper-button-prev,
          .swiper-button-next {
            visibility: hidden;
          }
        `}
      </style>
    </Swiper>
  );
}

export default Slider

