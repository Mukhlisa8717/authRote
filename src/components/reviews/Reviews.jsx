import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Reviews.scss"; 
import reviewImg1 from '../../assets/reviewsImg1.png';
import reviewImg2 from '../../assets/reviewsImg2.png';
import stars from "../../assets/stars.svg";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container reviews__cont">
        <div>
          <p className="subtitle">Here are our some of the best clients.</p>
          <h2 className="title">What People Say About Us</h2>
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={2}
          spaceBetween={30}
          className="reviews__list"
        >
          <SwiperSlide className="reviews__list-item">
            <img src={reviewImg1} alt="img 1" />
            <div className="reviews__list-item-context">
              <h3>Hamza Faizi</h3>
              <p>
                Don’t waste time, just order! This is the best website to
                purchase smart watches.
              </p>
              <img src={stars} alt="stars" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reviews__list-item">
            <img src={reviewImg2} alt="img 2" />
            <div className="reviews__list-item-context">
              <h3>Hafiz Huzaifa</h3>
              <p>
                I’ve been purchasing smart watches from Mohid for a long time.
                All the products are good quality.
              </p>
              <img src={stars} alt="stars" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reviews__list-item">
            <img src={reviewImg1} alt="img 1" />
            <div className="reviews__list-item-context">
              <h3>Hamza Faizi</h3>
              <p>
                Don’t waste time, just order! This is the best website to
                purchase smart watches.
              </p>
              <img src={stars} alt="stars" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reviews__list-item">
            <img src={reviewImg2} alt="img 2" />
            <div className="reviews__list-item-context">
              <h3>Hafiz Huzaifa</h3>
              <p>
                I’ve been purchasing smart watches from Mohid for a long time.
                All the products are good quality.
              </p>
              <img src={stars} alt="stars" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
