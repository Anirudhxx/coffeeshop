import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch }) => {
  const [address, setAddress] = useState("");

  const handleSearch = async () => {
    if (!address) return;

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/geocode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch location data");
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        onSearch({ lat: parseFloat(lat), lng: parseFloat(lng) });
      } else {
        alert("Location not found");
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
      alert("An error occurred while fetching location data");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" my={2}>
      <TextField
        variant="outlined"
        placeholder="Enter a location"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        sx={{
          width: "50%",
          flexBasis: "1",
          borderRadius: "60px",
          borderTopLeftRadius: "60px",
          borderBottomLeftRadius: "60px",
          mr: 1,
          borderTopRightRadius: "60px",
          borderBottomRightRadius: "60px",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        startIcon={<SearchIcon />}
        sx={{
          borderRadius: "30px",
          borderTopRightRadius: "30px",
          borderBottomRightRadius: "30px",
          bgcolor: "#003B40",
          "&:hover": { bgcolor: "#002d31" },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
