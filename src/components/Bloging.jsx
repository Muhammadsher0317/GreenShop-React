import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Bloging.css";
export default function ImgMediaCard() {
  return (

    <>

   
    <Card className="Bloging" sx={{ maxWidth: 268 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="168"
        image="/imgs/bloging.svg"
        
      />
      <CardContent className="bloginfolar">
        <Typography className="dalarbloging" gutterBottom variant="h5" component="div">
          September 12 I Read in 6 minutes
        </Typography>
        <Typography className="tiplariblogni" gutterBottom variant="h6" component="div">
          Cactus & Succulent Care Tips
        </Typography>

        <Typography className="datalrp" variant="body2" sx={{ color: "text.secondary" }}>
          Cacti are succulents are easy care plants for any home or patio.
        </Typography>
      </CardContent>
      <CardActions >
        <Button  className="blogingbutton" size="small">Read More </Button>
      </CardActions>
    </Card>
     </>
  );
}
