import React from "react";
import { Box, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ShoppingCart = ({ itemCount }) => {
  return (
    <Box sx={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000 }}>
      <IconButton color="inherit" aria-label="shopping cart">
        <Badge badgeContent={itemCount} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default ShoppingCart;
