"use client"
import React from 'react';
import reviews from '@/fakedata/reviews';
import { Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Reviews() {
  return (
    <section className='pt-[8rem]' id="review">
      <div className='flex items-center gap-4'>
        <h2 className='font-extrabold text-3xl text-primary'> 04.</h2>
        <h2 className='font-extrabold text-3xl text-accent'>See what clients have to say</h2>
        {/* <div className='w-[7rem] h-[1px] bg-textgray'></div>
      </div> */}
      </div>
      {/* <div className='mt-8'> */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          modules={[ Pagination, Autoplay]}
          autoplay={{delay:5000, disableOnInteraction: false}}
          className='mt-8 '
          breakpoints={{
            640:{
              spaceBetween: 10,
              slidesPerView: 2,
            },
            710:{
              spaceBetween: 30,
              slidesPerView: 2,
            },
            1000:{
              spaceBetween: 25,
              slidesPerView: 3,
            }
          }}
        >
          {reviews.map((review,index)=>{
            return(
              <SwiperSlide key={index}>
                <div className='bg-white rounded-md p-4 shadow-lg h-[18rem] w-[90%] sm:w-[95%} md:w-full mx-auto'>
                  <h5>{review.name}</h5>
                  <p>{review.title}</p>
                  <p>{review.review}</p>
                </div> 
              </SwiperSlide>
            )
          })}
        </Swiper>
      {/* // </div>  */}
    </section>
  )
}
