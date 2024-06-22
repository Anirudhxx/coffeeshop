import React from "react";
import { Paper, Container, Box, Typography, Grid } from "@mui/material";
import SearchBar from "./SearchBar";
import CoffeeShopCard from "./CoffeeShopCard";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GoogleLoginButton from './GoogleLoginButton';
const HomeContainer = ({
  user,
  handleSearch,
  coffeeShops,
  handleCardClick,
  coordinates,
  handleCartClick,
}) => {
  return (
    <Paper
      style={{
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "#f7f1e3",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          fontFamily: "Raleway, sans-serif",
          backgroundColor: "#f9f9f9",
          padding: "2rem",
          borderRadius: "12px",
          position: "relative",
        }}
      >
        <Box textAlign="center">
          <IconButton
            aria-label="Go to cart"
            onClick={handleCartClick}
            sx={{
              position: "absolute",
              top: "20px",
              right: "20px",
              backgroundColor: "#EDF0EF",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "50%",
              color: "#003B40",
            }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            style={{
              fontFamily: "Raleway, sans-serif",
              marginBottom: "1rem",
              color: "#003B40",
            }}
          >
            Find a Coffee Shop Anywhere
          </Typography>
          {user ? (
            <Typography
              variant="h6"
              component="div"
              style={{ marginBottom: "1rem", color: "#003B40" }}
            >
              Welcome, {user.name}!
            </Typography>
          ) : (
            <GoogleLoginButton/>
          )}
        </Box>

        <Box my={4}>
          <SearchBar onSearch={handleSearch} />
        </Box>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          style={{
            fontFamily: "Raleway, sans-serif",
            textAlign: "center",
            marginBottom: "1rem",
            color: "#003B40",
          }}
        >
          Featured Coffee Shops
        </Typography>

        <Grid container spacing={3}>
          {coffeeShops.map((shop) => (
            <Grid item xs={12} sm={6} md={4} key={shop.id}>
              <CoffeeShopCard
                shop={shop}
                onCardClick={handleCardClick}
                coordinates={coordinates}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
};

export default HomeContainer;
