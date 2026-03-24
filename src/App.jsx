import React, { createContext, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Shoping_cards from "./pages/shoping_card/Shoping_cards";
import Cheapup from "./pages/cheakapp.jsx/Cheapup";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/Login";

export const DataContext= createContext();

function App() {
  const [data, setdata] = useState([
    {
      id: 1,
      mainImg:
        "https://www.saferbrand.com/media/Articles/Safer-Brand/26-best-indoor-plants.jpg",
      price: 111,
      imgs: [
        "https://hips.hearstapps.com/hmg-prod/images/colorful-exotic-caladium-plants-in-flower-pots-royalty-free-image-1723738296.jpg?crop=0.668xw:1.00xh;0.122xw,0&resize=1200:*",
        "https://cdn.shopify.com/s/files/1/0558/1130/9591/files/unnamed-42.jpg?v=1678440040",
        "https://hips.hearstapps.com/hmg-prod/images/aglaonema-foliage-in-pot-at-living-home-spring-snow-royalty-free-image-1705612028.jpg?crop=0.668xw:1.00xh;0.0385xw,0&resize=640:*",
        "https://cdn.shopify.com/s/files/1/0558/1130/9591/files/unnamed-42.jpg?v=1678440040",
      ],
      desc: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.",
      count: 213,
      category: "House Plants",
    },
    {
      id: 2,
      mainImg:
        "https://www.saferbrand.com/media/Articles/Safer-Brand/26-best-indoor-plants.jpg",
      price: 111,
      imgs: [
        "https://hips.hearstapps.com/hmg-prod/images/colorful-exotic-caladium-plants-in-flower-pots-royalty-free-image-1723738296.jpg?crop=0.668xw:1.00xh;0.122xw,0&resize=1200:*",
        "https://cdn.shopify.com/s/files/1/0558/1130/9591/files/unnamed-42.jpg?v=1678440040",
        "https://hips.hearstapps.com/hmg-prod/images/aglaonema-foliage-in-pot-at-living-home-spring-snow-royalty-free-image-1705612028.jpg?crop=0.668xw:1.00xh;0.0385xw,0&resize=640:*",
        "https://cdn.shopify.com/s/files/1/0558/1130/9591/files/unnamed-42.jpg?v=1678440040",
      ],
      desc: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.",
      count: 213,
      category: "House Plants",
    },

    {
      id: 3,
      mainImg:
        "https://static.vecteezy.com/system/resources/thumbnails/000/225/518/small_2x/potted-plant-set-vector.jpg",
      price: 411,
      imgs: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJcqNfCw2m-JUd9InysPM8ZJhWUzejKkEyA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74inYYaWiIVAfYWb8v6gKQec1HFS9C2DESg&s",
        "https://cdn.shopify.com/s/files/1/0558/1130/9591/files/unnamed-42.jpg?v=1678440040",
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1718574528-the-sill_LargeDracaenaCompacta_Large_Pallasplanter-Black_variant.jpg?crop=1xw:0.966xh;center,top&resize=980:*",
      ],
      desc: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.",
      count: 213,
      category: "House Plants",
    },
  ]);
  const [carts, setcarts] = useState([
    {
      id: 3243,
      img: "https://www.saferbrand.com/media/Articles/Safer-Brand/26-best-indoor-plants.jpg",
      title: "House flower",
      price: 32,
      count: 1,
    },
    {
      id: 3243,
      img: "https://www.saferbrand.com/media/Articles/Safer-Brand/26-best-indoor-plants.jpg",
      title: "House flower",
      price: 32,
      count: 1,
    },
    {
      id: 3243,
      img: "https://www.saferbrand.com/media/Articles/Safer-Brand/26-best-indoor-plants.jpg",
      title: "House flower",
      price: 32,
      count: 1,
    },
    {
      id: 3243,
      img: "https://www.saferbrand.com/media/Articles/Safer-Brand/26-best-indoor-plants.jpg",
      title: "House flower",
      price: 32,
      count: 1,
    },
  ]);
  const [loginopen,setloginopen]=useState(false)
  return (
    <>
      <BrowserRouter>
        <DataContext.Provider value={{ data, setdata, carts, setcarts }}>
         <Navbar setloginopen={setloginopen} />
         {loginopen&&<Login setloginopen={setloginopen} />}
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop/:id" element={<Shop />} />
            <Route path="/shoping_card" element={<Shoping_cards />} />
            <Route path="/cheapup" element={<Cheapup/>} />
            
          
          </Routes>
        </DataContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
