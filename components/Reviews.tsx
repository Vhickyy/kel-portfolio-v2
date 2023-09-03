"use client"
import React from 'react';
import reviews from '@/fakedata/reviews';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/psagination';
import 'swiper/css/scrollbar';

export default function Reviews() {
  return (
    <section className='pt-[8rem]'>
      <div className='flex items-center gap-4'>
        <h2 className='font-extrabold text-3xl text-primary'> 04.</h2>
        <h2 className='font-extrabold text-3xl text-accent'>See what clients have to say</h2>
        {/* <div className='w-[7rem] h-[1px] bg-textgray'></div>
      </div> */}
      </div>
      <div className='flex flex-wrap gap-2 mt-10 items-center justify-center'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          
        
        {reviews.map((review,index)=>{
          return(
            <SwiperSlide>
            <div className='bg-white rounded-md p-4 shadow-md w-[15rem]'>
              <h5>{review.name}</h5>
              <p>{review.title}</p>
              <p>{review.review}</p>
            </div>
            </SwiperSlide>
          )
        })}
        </Swiper>
      </div>
    </section>
  )
}
