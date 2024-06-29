import { Button, Typography, Box } from "@mui/material";
import React from "react";

interface ChildComponentProps {
    onClick: () => void;
    currentPoints: number
}

const ClickerPart = ({ onClick, currentPoints }: ChildComponentProps) => {

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Pointless Points
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        style={{ margin: "20px" }}
      >
        Click Me!
      </Button>
      <Typography variant="h6">Points: {currentPoints}</Typography>
    </Box>
  );
};

export default ClickerPart;
