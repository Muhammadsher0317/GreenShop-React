import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Marquee from "react-fast-marquee";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaYoutube } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footertop">
            <div className="footegif">
              <img src="/imgs/footegir.svg" alt="" />

              <h1>Garden Care</h1>
              <h2>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </h2>
            </div>
            <div className="footegif">
              <img src="/imgs/Group 18.svg" alt="" />

              <h1>Garden Care</h1>
              <h2>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </h2>
            </div>
            <div className="footegif">
              <img src="/imgs/Group 19.svg" alt="" />

              <h1>Garden Care</h1>
              <h2>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </h2>
            </div>
            <div className="newsetlers">
              <h2>Would you like to join newsletters?</h2>
              <div className="form">
                <input type="text" placeholder="enter your email address..." />
                <Button variant="contained">Join</Button>
              </div>
              <p>
                We usually post offers and challenges in newsletter. We’re your
                online houseplant destination. We offer a wide range of
                houseplants and accessories shipped directly from our
                (green)house to yours!{" "}
              </p>
            </div>
          </div>
          <div className="footermarquerno">
            <Marquee>
              <img src="/imgs/logo.svg" alt="" />
            </Marquee>
            <Marquee>
              <div className="marquenorowone">
                <FaLocationDot />
                70 West Buckingham Ave. Farmingdale, NY 11735
              </div>
            </Marquee>
            <Marquee>
              <div className="marquenorow">
                <MdOutlineEmail />
                contact@greenshop.com
              </div>
            </Marquee>
            <Marquee>
              <div className="marquenorow">
                <FaPhoneAlt />
                +88 01911 717 490
              </div>
            </Marquee>
          </div>
          <div className="footerbootm">
           <div className="footerbottom_last">
             <div className="footerbotomrow">
              <h2>My Account</h2>
              <h3>My Account</h3>
              <h3>Our stores</h3>
              <h3>Contact us</h3>
              <h3>Career</h3>
              <h3>Specials</h3>
            </div>
            <div className="footerbotomrow">
              <h2>Help & Guide</h2>
              <h3>Help Center</h3>
              <h3>How to Buy</h3>
              <h3>Shipping & Delivery</h3>
              <h3>Product Policy</h3>
              <h3>How to Return</h3>
            </div>
            <div className="footerbotomrow">
              <h2>Categories</h2>
              <h3>House Plants</h3>
              <h3>Potter Plants</h3>
              <h3>Seeds</h3>
              <h3>Small Plants  </h3>
              <h3>Accessories</h3>
            </div>
            <div className="social">
                <h2>Social Media</h2>
                <div className="socialicons">
                    <div className="iconsla">
                        <FaFacebookF />
                    </div>
                       <div className="iconsla">
                        <FaInstagram />
                    </div>
                       <div className="iconsla">
                        <FaLinkedinIn />
                    </div>
                     <div className="iconsla">
                      <FaYoutube />
                    </div>
                </div>
                <h3>We accept</h3>
                <img src="  /imgs/image 16.svg" alt="" />
            </div>
           </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
