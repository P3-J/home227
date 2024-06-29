import { Button, Typography, Box } from "@mui/material";
import React from "react";

interface ChildComponentProps {
    onClick: (data: string) => void;
}




const Buyer = ({ onClick }: ChildComponentProps) => {

    const handleClick = () => {
        onClick('green')
    }

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{ margin: "20px" }}
      >
        Random color : 10 points
      </Button>
    </Box>
  );
};

export default Buyer;
