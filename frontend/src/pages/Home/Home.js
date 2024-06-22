import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import fetchNearbyCoffeeShops from "../../utilFunctions/fetchNearbyCoffeeShops";
import HomeContainer from "../../components/HomeContainer";
import api from "../../services/api";

const Home = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    if (parsed.user) {
      setUser(JSON.parse(parsed.user));
    }
  }, []);

  useEffect(() => {
    async function fetchCoffeeShops() {
      try {
        const response = await api.get("api/coffee-shops");
        setCoffeeShops(response.data);
      } catch (error) {
        console.error("Error fetching coffee shops:", error);
      }
    }

    fetchCoffeeShops();
  }, []);

  const handleSearch = async ({ lat, lng }) => {
    setCoordinates({ lat, lng });
    try {
      const nearbyCoffeeShops = await fetchNearbyCoffeeShops(lat, lng);
      setCoffeeShops(nearbyCoffeeShops);
    } catch (error) {
      console.error("Error handling coffee shop search:", error);
      alert(
        "An error occurred while fetching coffee shops. Please try again later.",
      );
    }
  };

  const handleCartClick = () => {
    navigate("/cart");
  };
  const handleCardClick = (shopId) => {
    navigate(`/coffee-shop/${shopId}`);
  };

  return (
    <>
      <HomeContainer
        user={user}
        handleSearch={handleSearch}
        coffeeShops={coffeeShops}
        handleCardClick={handleCardClick}
        coordinates={coordinates}
        handleCartClick={handleCartClick}
      />
    </>
  );
};

export default Home;
