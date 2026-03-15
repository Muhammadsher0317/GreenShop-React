import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Sahifalararo o'tish uchun
import "./Cards.css";

function Cards() {
  const navigate = useNavigate();

  // Shop sahifasiga o'tish funksiyasi
  const handleGoToShop = () => {
    navigate("/shop"); 
  };

  // Ikonkalar bosilganda Card-ni click hodisasi ishlab ketmasligi uchun
  const handleIconClick = (e) => {
    e.stopPropagation(); // Bu juda muhim! Card-ning onClick-ini to'xtatadi.
    console.log("Ikonka bosildi, lekin Shopga o'tmadi.");
  };

  return (
    <Card className="plant-card" onClick={handleGoToShop} style={{ cursor: 'pointer' }}>
      <div className="img-box">
        <CardMedia
          component="img"
          image="/imgs/cards.svg"
          alt="plant"
        />

        <div className="icons">
          <FaShoppingCart onClick={handleIconClick} />
          <FaHeart onClick={handleIconClick} />
          <FaSearch onClick={handleIconClick} />
        </div>
      </div>

      <CardContent className="card-info">
        <Typography variant="h6">Barberton</Typography>
        <Typography className="price">$119.00</Typography>
      </CardContent>
    </Card>
  );
}

export default Cards;