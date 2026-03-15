import React from "react";
import "./Imgslarwithflowers.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Imglarwithflower() {
  return (
    <>
      <div className="cardslar">
        <img src="/imgs/blueflowersone.svg" alt="" />
        <div className="imginfo">
          <h1>Summer cactus & succulents</h1>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
      
        <Button className="imglarbutton" variant="contained">Find More</Button>
        </div>
      </div>
    </>
  );
}

export default Imglarwithflower;
