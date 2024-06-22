import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import HomeButton from "../components/HomeButton";
import ProductList from "../components/ProductList";
import Snackbar from "../components/SnackBar";
import { CartContext } from "../components/CartContext";
const CoffeeShopDetails = () => {
  const { id } = useParams();
  const [coffeeShop, setCoffeeShop] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  useEffect(() => {
    const fetchCoffeeShop = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/coffee-shops/${id}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch coffee shop");
        }
        const data = await response.json();
        setCoffeeShop(data);
      } catch (error) {
        console.error("Error fetching coffee shop:", error);
      }
    };

    fetchCoffeeShop();
  }, [id]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (!coffeeShop) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <CircularProgress />
      </Box>
    );
  }

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
        <HomeButton /> {/* Render home button */}
        <ProductList coffeeShop={coffeeShop} addToCart={handleAddToCart} />
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Product added to cart"
      />
    </Box>
  );
};

export default CoffeeShopDetails;
