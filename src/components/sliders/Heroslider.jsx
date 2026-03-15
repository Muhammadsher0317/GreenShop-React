// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from '@mui/material/Button';
import "./Heroslider.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Heroslider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper hero_slider"
      >
        <SwiperSlide className="mainone">
          <div className="swiperleft">
             <h2>Welcome to GreenShop</h2>
        <h1>Let’s Make a Better <span>Planet</span> </h1>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
         <Button className="shopbutton" variant="contained">SHOP NOW</Button>
          </div>
          <div className="swiperright">
            <img className="smallimg" src="/imgs/flowersmal.svg" alt="" />
            <img className="hugeimg" src="/imgs/flowerone.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="mainone">
          <div className="swiperleft">
             <h2>Welcome to GreenShop</h2>
        <h1>Let’s Make a Better <span>Planet</span> </h1>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
         <Button className="shopbutton" variant="contained">SHOP NOW</Button>
          </div>
          <div className="swiperright">
            <img className="smallimg" src="/imgs/flowersmal.svg" alt="" />
            <img className="hugeimg" src="/imgs/flowerone.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="mainone">
          <div className="swiperleft">
             <h2>Welcome to GreenShop</h2>
        <h1>Let’s Make a Better <span>Planet</span> </h1>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
         <Button className="shopbutton" variant="contained">SHOP NOW</Button>
          </div>
          <div className="swiperright">
            <img className="smallimg" src="/imgs/flowersmal.svg" alt="" />
            <img className="hugeimg" src="/imgs/flowerone.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="mainone">
          <div className="swiperleft">
             <h2>Welcome to GreenShop</h2>
        <h1>Let’s Make a Better <span>Planet</span> </h1>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
         <Button className="shopbutton" variant="contained">SHOP NOW</Button>
          </div>
          <div className="swiperright">
            <img className="smallimg" src="/imgs/flowersmal.svg" alt="" />
            <img className="hugeimg" src="/imgs/flowerone.svg" alt="" />
          </div>
        </SwiperSlide>
       <SwiperSlide className="mainone">
          <div className="swiperleft">
             <h2>Welcome to GreenShop</h2>
        <h1>Let’s Make a Better <span>Planet</span> </h1>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
         <Button className="shopbutton" variant="contained">SHOP NOW</Button>
          </div>
          <div className="swiperright">
            <img className="smallimg" src="/imgs/flowersmal.svg" alt="" />
            <img className="hugeimg" src="/imgs/flowerone.svg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Heroslider;
