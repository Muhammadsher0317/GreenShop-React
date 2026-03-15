
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Shop_slider.css';

// import required modules
import { Pagination } from 'swiper/modules';


function Shop_slider() {    
  return (
     <>
       <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shop_box_slider'><img src="/imgs/beachflower.svg" alt="" />
        <div className="shopboxrow">
            <h2 className='shopboxtitle'>Beach Spider Lily
                <span className='shopbox_price'>$129.00</span></h2>
                </div>
                </SwiperSlide>
                       <SwiperSlide className='shop_box_slider'><img src="/imgs/beachflower.svg" alt="" />
        <div className="shopboxrow">
            <h2 className='shopboxtitle'>Beach Spider Lily
                <span className='shopbox_price'>$129.00</span></h2>
                </div>
                </SwiperSlide>
                       <SwiperSlide className='shop_box_slider'><img src="/imgs/beachflower.svg" alt="" />
        <div className="shopboxrow">
            <h2 className='shopboxtitle'>Beach Spider Lily
                <span className='shopbox_price'>$129.00</span></h2>
                </div>
                </SwiperSlide>
                       <SwiperSlide className='shop_box_slider'><img src="/imgs/beachflower.svg" alt="" />
        <div className="shopboxrow">
            <h2 className='shopboxtitle'>Beach Spider Lily
                <span className='shopbox_price'>$129.00</span></h2>
                </div>
                </SwiperSlide>
                       <SwiperSlide className='shop_box_slider'><img src="/imgs/beachflower.svg" alt="" />
        <div className="shopboxrow">
            <h2 className='shopboxtitle'>Beach Spider Lily
                <span className='shopbox_price'>$129.00</span></h2>
                </div>
                </SwiperSlide>
                       <SwiperSlide className='shop_box_slider'><img src="/imgs/beachflower.svg" alt="" />
        <div className="shopboxrow">
            <h2 className='shopboxtitle'>Beach Spider Lily
                <span className='shopbox_price'>$129.00</span></h2>
                </div>
                </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Shop_slider