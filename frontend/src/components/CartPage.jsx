import React, { useContext } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "./CartContext";
import HomeButton from "./HomeButton";
const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Box
      sx={{ minHeight: "100vh", padding: "2rem", backgroundColor: "#f7f1e3" }}
    >
      <Box
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
          borderRadius: "20px",
          fontFamily: "Raleway, sans-serif",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ marginBottom: "20px", color: "#003B40" }}
        >
          Shopping Cart
        </Typography>
        {cart.length === 0 ? (
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ fontFamily: "Raleway", color: "#003B40" }}
          >
            Your cart is empty.
          </Typography>
        ) : (
          cart.map((product) => (
            <Box
              key={product.id}
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
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
                aria-label="remove from cart"
                onClick={() => removeFromCart(product.id)}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  borderRadius: "50%",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  marginLeft: "10px",
                }}
              >
                <DeleteIcon sx={{ color: "#003B40" }} />
              </IconButton>
            </Box>
          ))
        )}
        <HomeButton />
      </Box>
    </Box>
  );
};

export default Cart;
