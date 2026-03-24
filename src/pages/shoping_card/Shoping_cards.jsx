import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Pricecontrolers from "../../components/Pricecontrolers";
import Button from "@mui/material/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Shopin_cart.css";
import Heroslider from "../../components/sliders/Heroslider";
import Shop_slider from "../../components/sliders/Shop_slider";
import Footer from "../../components/footer/Footer";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";
function Shoping_cards() {
  const {carts}=useContext(DataContext)
  return (
    <>
     
      <div className="shopingcards">
        <div className="container">
          <h1 className="newlar">
            <span>Home</span> / Shop / Shopping Cart
          </h1>
          <div className="producards_price">
            <div className="productpricelarleft">
              <div className="productlarpriceleft">
                <h1 className="productlar_product">Products</h1>
                <h2 className="price_product">Price</h2>
                <h2 className="quatinity">Quantity</h2>
                <h2 className="totalquanitty">Total</h2>
              </div>

              <div className="productlarpriceleftcards">
                {carts.map((item)=>{
                  return <div className="productlarpriceleftcards_row">
                  <div className="imgwithnames">
                    <img src={item.img} alt="" />
                    <div className="nameswith_number">
                      <h2>{item.title}</h2>
                      <h3>
                        <span>SKU: </span> 1995751877966
                      </h3>
                    </div>
                  </div>

                  <span className="nameswithprice">$119.00</span>
                  <Pricecontrolers color="#46A358" />
                  <span>{item.price}</span>

                  <DeleteOutlinedIcon />
                </div>
                
                })}
                
              </div>
            </div>
            <div className="productprice_right">
              <h2>Cart Totals</h2>
              <h3>Coupon Apply</h3>
              <div className="inputdata">
                <input type="text" placeholder="Enter coupon code here..." />
                <Button color="success" variant="contained">
                  Apply
                </Button>
              </div>

              <div className="subtotalwithtotal">
                <p>
                  Subtotal <span>$2,683.00</span>
                </p>
                <p>
                  Coupon Discount <span>(-) 00.00</span>{" "}
                </p>
                <div className="rowshipg">
                 <div className="rowshiptitle">
                   <h5>Shiping</h5>
                 </div>
                  <div className="rowshipingwith">
                    <span>$16.00</span>
                    <p className="vieslar">View shipping charge</p>
                  </div>
                </div>
                <div className="total">
                  <h1>Total</h1>
                  <span>$2,699.00</span>
                </div>
                <Link to={"/cheapup"} >
                <Button  color="success"  className="procedbutton" variant="contained">Proceed To Checkout</Button>
                </Link>
                
                <Button color="success" className="continueshoping" variant="text">Continue Shopping</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="interesteditem">
        <div className="container">
          <h1>You may be interested in</h1>
          <Shop_slider />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shoping_cards;
