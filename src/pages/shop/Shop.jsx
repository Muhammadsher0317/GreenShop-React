import Navbar from "../../components/navbar/Navbar";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./Shop.css";
import { Button, Chip } from "@mui/material";
import Pricecontrolers from "../../components/Pricecontrolers";
import { HeartBrokenOutlined } from "@mui/icons-material";
import { CiHeart, CiMail } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import Shop_slider from "../../components/sliders/Shop_slider";
import Footer from "../../components/footer/Footer";
function Shop() {
  return (
    <div>
      <Navbar />
      <div className="shop_hero">
        <div className="container">
          <div className="entry_shop">
            <p>
              Home / <span>Shop</span>{" "}
            </p>
          </div>
          <div className="mainbody_shop">
            <div className="imglarrowlashop">
              <div className="smallimgs">
                <img src="/imgs/smalimgone.svg" alt="" />
                <img src="/imgs/smallimgtwo.svg" alt="" />
                <img src="/imgs/smalimhthree.svg" alt="" />
                <img src="/imgs/smallimgfour.svg" alt="" />
              </div>
              <div className="largeimg">
                <img src="/imgs/mainimghuge.svg" alt="" />
              </div>
            </div>
            <div className="imgrowinfoshop">
              <h1>Barberton Daisy</h1>
              <div className="starsrow_shop">
                <span className="shop_price">$119.00</span>
                <div className="onthestarrow">
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                  <h4> 19 Customer Review</h4>
                </div>
              </div>
              <h3 className="shop_description">Short Description:</h3>
              <p className="descriptionshop">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground.
              </p>
              <h2 className="sizelar_shop">Size:</h2>
              <div className="row_shoplarchip">
                <Chip className="labelone" color="#46A358" label="S" />
                <Chip label="M" />
                <Chip label="L" />
                <Chip label="XL" />
              </div>
              <div className="pricecontrollers">
                <Pricecontrolers color="#46A358" />
                <div className="btns_shop">
                  <Button variant="contained" color="success">
                    Buy NOW
                  </Button>
                  <Button variant="outlined" color="success">
                    Add to cart
                  </Button>

                  <Button
                    className="heartone"
                    variant="outlined"
                    color="success"
                  >
                    <BiHeart />
                  </Button>
                </div>
              </div>
              <div className="shops_bottom">
                <h3>
                  SKU: <span> 1995751877966</span>
                </h3>
                <h3>
                  Categories: <span> Potter Plants</span>
                </h3>
                <h3>
                  Tags: <span> Home, Garden, Plants</span>
                </h3>
                <div className="shopicosrow">
                  Share this products:
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <CiMail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product_preview">
        <div className="container">
          <div className="productpreview_title">
            <h2>Product Description</h2> <h2>Reviews (19)</h2>
          </div>
          <p className="maindata_shop">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
            
            <br />
            <br />
       
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground.{" "}
          </p>
          <h2 className="title_name">Living Room:</h2>
          <p className="extra_data">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h2 className="title_name">Dining Room:</h2>
          <p className="extra_data">
            The benefits of houseplants are endless. In addition to cleaning the
            air of harmful toxins, they can help to improve your mood, reduce
            stress and provide you with better sleep. Fill every room of your
            home with houseplants and their restorative qualities will improve
            your life.
          </p>
          <h2 className="title_name">Office:</h2>
          <p className="extra_data">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="realtedproduct_shop">
        <div className="container">
          <h1 className="realted_name">Releted Products</h1>
       <div className="shopsliderlar">
           <Shop_slider/>
       </div>
        </div>
      </div>
      <Footer/>
    
    </div>
  );
}

export default Shop;
