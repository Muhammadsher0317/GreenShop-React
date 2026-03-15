import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Heroslider from "../../components/sliders/Heroslider";
import { Slider } from "@mui/material";
import Button from "@mui/material/Button";
import "./home.css";
import Productbox from "../../components/Productbox";
import Cards from "../../components/Cards";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Imglarwithflower from "../../components/Imglarwithflower";
import { BiLogoBing } from "react-icons/bi";
import Bloging from "../../components/Bloging";
import Footer from "../../components/footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Heroslider />

      <div className="categorslar">
        <div className="container">
          <div className="categroislarleft">
            <h1>Categories</h1>
            <div className="cardslar">
              <div className="row">
                <p>House Plants </p>
                <span>(33)</span>
              </div>
              <div className="row">
                <p>Potter Plants </p>
                <span>(12)</span>
              </div>
              <div className="row">
                <p>Seeds </p>
                <span>(65)</span>
              </div>
              <div className="row">
                <p>Small Plants </p>
                <span>(39)</span>
              </div>
              <div className="row">
                <p>Succulents </p>
                <span>(17)</span>
              </div>
              <div className="row">
                <p>Trerrariums </p>
                <span>(19)</span>
              </div>
              <div className="row">
                <p>Gardening </p>
                <span>(13)</span>
              </div>
              <div className="row">
                <p>Accessories </p>
                <span>(18)</span>
              </div>
            </div>
            <h1 className="hugename">Price Range</h1>
            <Slider />
            <h4 className="pricelar">
              Price: <span>$39 - $1230</span>{" "}
            </h4>
            <Button className="filterlardas" variant="contained">
              Filter
            </Button>
            <div className="sizelar">
              <h1>Size</h1>
              <div className="sizelarrow">
                <h2>Small <span>(119)</span></h2>
                <h2> Medium <span>(86)</span></h2>
                <h2>Large <span>(78)</span></h2>

              </div>
            </div>
            <img className="mainimgsla" src="/imgs/Super Sale Banner.svg" alt="" />
          </div>
          <div className="categorslarright">
            <div className="categorslarrows">
              <div className="categorlarlinks">
                <li>
                  <a className="categoryleft" href="">All Plants</a>
                </li>
                <li>
                  <a className="categoryleft"  href="">New Arrivals</a>
                </li>
                <li>
                  <a className="categoryleft"  href="">Sale</a>
                </li>
              </div>
              <div className="categorlarrightlar">
                <p>Short by:Default sorting</p>
              </div>
            </div>
            <div className="categorycards">
              <Cards/>
              <Cards/>
              <Cards/>
              <Cards/>
              <Cards/>
              <Cards/>
               <Cards/>
               <Cards/>
                <Cards/>

            </div>
          </div>
          
        </div>
      </div>
      <div className="bottomlar">
        <div className="container">
                      <Pagination count={4} variant="outlined" shape="rounded" />

        </div>

          </div>
          <div className="kaktuslar">
            <div className="container">
              <Imglarwithflower/>
              <Imglarwithflower/>
            </div>
          </div>
          <div className="bloging">
            <div className="container">
              <h1>Our Blog Posts</h1>
              
              <p>We are an online plant shop offering a wide range of cheap
                 and trendy plants. </p>
                <div className="blogingrow">
                  <Bloging /> 
                   <Bloging /> 
                    <Bloging /> 
                   <Bloging /> 

                  
                </div>
              
            </div>
          </div>
          <Footer/>
    </>
  );
}

export default Home;
