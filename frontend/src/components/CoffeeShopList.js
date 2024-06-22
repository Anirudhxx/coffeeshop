import { useState, useEffect } from "react";
import api from "../services/api";

function CoffeeShopList() {
  const [coffeeShops, setCoffeeShops] = useState([]);

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

  return coffeeShops;
}

export default CoffeeShopList;
