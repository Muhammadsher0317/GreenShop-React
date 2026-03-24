import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Cheapuplarni.css";
import Login from "../../components/Login";
function Cheapup() {
  const [butondata, setbuttondata] = useState(false);
  return (
    <div className="checkupsalr">
      <Navbar />
      <Login/>

      <div className="checkuplardan">
        <div className="container">
          <div className="cheackuptop">
            <h1>
              Home <span>/ Shop / Checkout</span>{" "}
            </h1>
          </div>
          <div className="checkupmiddle">
            <div className="checkupmiddlelrft">
              <h2 className="billings">Billing Address</h2>
              <div className="addreslarrow">
                <div className="addreslarrowleft">
                  <h2>First Name</h2>
                  <input type="text" />
                </div>
                <div className="addreslarrowright">
                  <h2>Last Name</h2>
                  <input type="text" />
                </div>
              </div>

              <div className="addreslarrow">
                <div className="addreslarrowleft">
                  <h2>Country / Region</h2>
                  <select name="" id="">
                    <option value="">Select a country / region</option>
                  </select>
                </div>
                <div className="addreslarrowright">
                  <h2>Town / City</h2>
                  <input type="text" />
                </div>
              </div>

              <div className="addreslarrow">
                <div className="addreslarrowleft">
                  <h2>Street Address</h2>
                  <input
                    type="text"
                    placeholder="House number and street name"
                  />
                </div>
                <div className="addreslarrowright">
                  <h2>Street appartment</h2>
                  <input
                    type="text"
                    placeholder="Appartment, suite, unit, etc. (optional)"
                  />
                </div>
              </div>

              <div className="addreslarrow">
                <div className="addreslarrowleft">
                  <h2>State</h2>
                  <select name="" id="">
                    <option value="">Select a state</option>
                  </select>
                </div>
                <div className="addreslarrowright">
                  <h2>Zip</h2>
                  <input type="text" />
                </div>
              </div>

              <div className="addreslarrow">
                <div className="addreslarrowleft">
                  <h2>Email address</h2>
                  <input type="text" />
                </div>
                <div className="addreslarrowright">
                  <h2>Phone Number</h2>
                  <input type="text" placeholder="+96612345678" />
                </div>
              </div>
              <div className="shipslaer">
                <input type="radio" />
                <h3>Ship to a different address?</h3>
              </div>
              <div className="notelar">
                <h4>Order notes (optional)</h4>

                <textarea className="notelarinput"></textarea>
              </div>
            </div>
            <div className="checkupmiddright">
              <h2 className="billings">Your Order</h2>

              <div className="checkupmid_card">
                <div className="checkupmi_row">
                  <h2>Products</h2>
                  <h2>Subtotal</h2>
                </div>
                <div className="checkproduct_cards_row">
                  <div className="checkproduct_row">
                    <img src="/imgs/checkrow.svg" alt="" />
                    <div className="chechnames_row">
                      <h3>Barberton Daisy</h3>
                      <h3>SKU: 1995751877966</h3>
                    </div>
                    <span>(x 2)</span>
                    <p>$238.00</p>
                  </div>
                  <div className="checkproduct_row">
                    <img src="/imgs/checkrow.svg" alt="" />
                    <div className="chechnames_row">
                      <h3>Barberton Daisy</h3>
                      <h3>SKU: 1995751877966</h3>
                    </div>
                    <span>(x 2)</span>
                    <p>$238.00</p>
                  </div>
                  <div className="checkproduct_row">
                    <img src="/imgs/checkrow.svg" alt="" />
                    <div className="chechnames_row">
                      <h3>Barberton Daisy</h3>
                      <h3>SKU: 1995751877966</h3>
                    </div>
                    <span>(x 2)</span>
                    <p>$238.00</p>
                  </div>
                  <div className="checkproduct_row">
                    <img src="/imgs/checkrow.svg" alt="" />
                    <div className="chechnames_row">
                      <h3>Barberton Daisy</h3>
                      <h3>SKU: 1995751877966</h3>
                    </div>
                    <span>(x 2)</span>
                    <p>$238.00</p>
                  </div>
                </div>
              </div>

              <div className="checkup_maindata">
                <p className="cupon_codes">
                  Have a coupon code? <span>Click here</span>{" "}
                </p>
                <div className="pricedata_checp">
                  <h2>Subtotal</h2>
                  <span>$2,683.00</span>
                </div>
                <div className="pricedata_checp">
                  <h2>Coupon Discount</h2>
                  <span>(-) 00.00</span>
                </div>
                <div className="shipping_check">
                  <h3>Shiping</h3>
                  <div className="shippingpayment">
                    <h3>$16.00</h3>
                    <span>View shipping charge</span>
                  </div>
                </div>
                <div className="checktotoal">
                  <h2>Total </h2>
                  <span>$2,699.00</span>
                </div>
                <h2>Payment Method</h2>
                <div className="payment_method_paypal">
                  <input type="radio" />
                  <img src="/imgs/paymetmathod.svg" alt="" />
                </div>
                <div className="payment_method_paypal_cash">
                  <input type="radio" />
                  <h2>Dorect bank transfer</h2>
                </div>
                <div className="cashdelivered_pay">
                  <input type="radio" />
                  <h2>Cash on delivery</h2>
                </div>
                <button
                  onClick={() => {
                    setbuttondata(true);
                  }}
                  className="orderdplce"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {butondata && (
        <div className="modal">
          <div className="modallarmalumot">
            <div className="modal_top">
              <img src="/imgs/asds.svg" alt="" />
              <h1>Your order has been received</h1>
            </div>
            <div className="modal_datelar">
              <div className="order_number">
                <h1>Order Number</h1>
                <span>19586687</span>
              </div>
              <div className="order_number">
                <h1>Date</h1>
                <span>15 Sep, 2021</span>
              </div>
              <div className="order_number">
                <h1>Total</h1>
                <span>2,699.00</span>
              </div>
              <div className="order_number">
                <h1>Payment Method</h1>
                <span>Cash on delivery</span>
              </div>
            </div>
            <h2 className="order_data">Order Details</h2>
            <div className="prodeuctdata">
              <h1>Products</h1>
              <div className="prodeuctdata_subtotal">
                <h2>Qty</h2>
                <h2>Subtotal</h2>
              </div>
            </div>
            <div className="cgheckcards">
              <div className="checkproduct_row">
                <div className="imgwithtitle">
                  <img src="/imgs/checkrow.svg" alt="" />
                  <div className="chechnames_row">
                    <h3>Barberton Daisy</h3>
                    <h3>SKU: 1995751877966</h3>
                  </div>
                </div>

                <span>(x 2)</span>
                <p>$238.00</p>
              </div>
              <div className="checkproduct_row">
                <div className="imgwithtitle">
                  <img src="/imgs/checkrow.svg" alt="" />
                  <div className="chechnames_row">
                    <h3>Barberton Daisy</h3>
                    <h3>SKU: 1995751877966</h3>
                  </div>
                </div>

                <span>(x 2)</span>
                <p>$238.00</p>
              </div>
              <div className="checkproduct_row">
                <div className="imgwithtitle">
                  <img src="/imgs/checkrow.svg" alt="" />
                  <div className="chechnames_row">
                    <h3>Barberton Daisy</h3>
                    <h3>SKU: 1995751877966</h3>
                  </div>
                </div>

                <span>(x 2)</span>
                <p>$238.00</p>
              </div>
            </div>
            <div className="shipppingwith_total">
              <div className="shiping_totlanumber">
                <h1>Shiping</h1> <span>$16.00</span>
              </div>
              <div className="shiping_totlanumber">
                <h2>Total</h2> <span className="allsum">$2,699.00</span>
              </div>
            </div>
            <p className="proceiiddata">
              Your order is currently being processed. You will receive an order
              confirmation email shortly with the expected delivery date for
              your items.
            </p>
            <div className="orderbutton">
              <button
                onClick={() => {
                  setbuttondata(false);
                }}
                className="order_button"
              >
                Track your order
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Cheapup;
