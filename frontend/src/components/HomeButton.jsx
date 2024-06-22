import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => navigate("/")}
      sx={{
        position: "absolute",
        top: "20px",
        right: "20px",
        backgroundColor: "#003B40",
        color: "#fff",
      }}
    >
      <HomeIcon />
    </Button>
  );
};

export default HomeButton;
