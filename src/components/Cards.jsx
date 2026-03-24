import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

import "./Cards.css";
import { DataContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Cards({ info }) {
  const { carts, setcarts } = useContext(DataContext);

  return (
    <Link to={`/shop/${info.id}`} className="plant-card">
      <div className="img-box">
        <CardMedia component="img" image={info.mainImg} alt="plant" />

        <div className="icons">
          <FaShoppingCart
            onClick={(e) => {
              e.preventDefault();
              const obj = {
                id: Math.floor(Math.random() * 9999),
                img: info.mainImg,
                title: info.category,
                price: info.price,
                count: 1,
              };
              setcarts([...carts, obj]);
            }}
          />
          <FaHeart />
          <FaSearch />
        </div>
      </div>

      <CardContent className="card-info">
        <Typography variant="h6">{info.category}</Typography>
        <Typography className="price">{info.price}</Typography>
      </CardContent>
    </Link>
  );
}

export default Cards;
