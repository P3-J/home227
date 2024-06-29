import React, { useState } from "react";
import { Container } from "@mui/material";
import ClickerPart from "./gameModules/clickerPart";
import Buyer from "./gameModules/buyer";

const CookieClicker = () => {
  const [points, setPoints] = useState(0);
  const [background, setBackground] = useState('white')

  const handleClick = () => {
    setPoints(points + 1);
    console.log(`Cookies: ${points + 1}`);
  };

  const handleBuy = (data: string) => {
    setBackground(data)
  }

  return (
    <Container style={{ textAlign: "center", marginTop: "50px", backgroundColor: background}}>
      <ClickerPart onClick={handleClick} currentPoints={points} />
      <Buyer onClick={handleBuy}/>
    </Container>
  );
};

export default CookieClicker;
