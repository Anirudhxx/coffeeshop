import React from "react";
import { Snackbar } from "@mui/material";

const CustomSnackbar = ({ open, onClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      message="Item added to cart!"
    />
  );
};

export default CustomSnackbar;
