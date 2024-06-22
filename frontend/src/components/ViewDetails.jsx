import React from "react";
import { Button } from "@mui/material";

const ViewDetailsButton = ({ onClick, shopId }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => onClick(shopId)}
      fullWidth
      sx={{
        borderRadius: "0px 0px 12px 12px",
        backgroundColor: "#003B40",
        color: "#fff",
      }}
    >
      View Details
    </Button>
  );
};

export default ViewDetailsButton;
