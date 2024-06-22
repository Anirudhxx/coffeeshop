import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import useDistanceCalculator from "../../utilFunctions/useDistanceCalculator";
import ViewDetailsButton from "../ViewDetails";

const CoffeeShopCard = ({ shop, onCardClick, coordinates }) => {
  const defaultDelhiCoordinates = { lat: 28.7041, lng: 77.1025 };
  const [isStarred, setIsStarred] = useState(false);

  const handleStarClick = () => {
    setIsStarred(!isStarred);
  };

  const lat = coordinates.lat || defaultDelhiCoordinates.lat;
  const lng = coordinates.lng || defaultDelhiCoordinates.lng;

  const distance = useDistanceCalculator(
    lat,
    lng,
    shop.location.lat,
    shop.location.lng,
  );

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={shop.imageUrl}
        alt={shop.name}
        sx={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontFamily: "Raleway, sans-serif", color: "#003B40" }}
        >
          {shop.name}
        </Typography>
        <Box display="flex" alignItems="center">
          <IconButton
            aria-label="toggle star"
            onClick={handleStarClick}
            sx={{
              color: isStarred ? "#FFD700" : "rgba(0, 0, 0, 0.54)",
            }}
          >
            <StarIcon />
          </IconButton>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: "Raleway, sans-serif", color: "#003B40" }}
          >
            {shop.ratings.length > 0
              ? shop.ratings[0].rating.toFixed(1)
              : "No ratings"}{" "}
            ({shop.ratings.length} reviews)
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginTop: "8px" }}
          sx={{ fontFamily: "Raleway, sans-serif", color: "#003B40" }}
        >
          {`${distance} miles away`}
        </Typography>
      </CardContent>
      <Box mt="auto">
        <ViewDetailsButton onClick={onCardClick} shopId={shop.id} />
      </Box>
    </Card>
  );
};

export default CoffeeShopCard;
