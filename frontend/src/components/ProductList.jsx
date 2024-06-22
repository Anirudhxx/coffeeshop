import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductList = ({ coffeeShop, addToCart }) => {
  return (
    <Box sx={{ borderRadius: "20px", overflow: "hidden" }}>
      <Box
        component="img"
        src={coffeeShop.imageUrl}
        alt={coffeeShop.name}
        sx={{
          objectFit: "cover",
          width: "100%",
          height: "250px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      />
      <Box sx={{ padding: "20px" }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          style={{ fontFamily: "Raleway", color: "#003B40" }}
        >
          {coffeeShop.name}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          gutterBottom
          style={{ fontFamily: "Raleway, sans-serif", color: "#003B40" }}
        >
          Address: {coffeeShop.address}
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{ fontFamily: "Raleway, sans-serif", color: "#003B40" }}
        >
          Products:
        </Typography>
        <Box>
          {coffeeShop.products.map((product) => (
            <Box
              key={product.id}
              sx={{
                position: "relative",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                padding: "10px",
                backgroundColor: "#EDF0EF",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "10px",
                  backgroundImage: `url(${product.imageUrl})`,
                  backgroundSize: "cover",
                  flexShrink: 0,
                }}
              ></Box>
              <Box
                sx={{
                  marginLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                    color: "#003B40",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontFamily: "Raleway", color: "#003B40" }}
                >
                  {product.description}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: "600",
                    color: "#003B40",
                  }}
                >
                  ${product.price}
                </Typography>
              </Box>
              <IconButton
                aria-label="add to cart"
                onClick={() => addToCart(product)}
                sx={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  borderRadius: "50%",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                }}
              >
                <ShoppingCartIcon sx={{ color: "#003B40" }} />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductList;
