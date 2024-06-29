import { Button, Box } from "@mui/material";
import React from "react";

interface ChildComponentProps {
    onClick: (data: string) => void;
}

interface Upgrades {
  [key: string]: [number, number];
}

interface UpgradeClickHandler {
  upgradeClickHandler: (name: string) => void
}

const upgrades: Upgrades = {
  nothing: [1, 2],
  water: [2, 3],
  earth: [3, 5],
  fire: [20, 10],
}

const UpgradeMap = ({upgradeClickHandler}: UpgradeClickHandler) => {
  return(
    <>
      {Object.entries(upgrades).map(([key, value]) => (
          <Button
          variant="contained"
          color="primary"
          onClick={() => upgradeClickHandler(key)}
          style={{ margin: "20px", width: '40vw', minWidth: '200px' }}
          key={key}
        >
          Buy : {key} for {value[0]}
      </Button>
      ))}
    </>
  )
}



const Buyer = ({ onClick }: ChildComponentProps) => {

  const handleClick = (name: string) => {
      onClick(name)
      console.log(name)
  }


  return (
    <Box sx={{
      width: '100%',
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <UpgradeMap upgradeClickHandler={handleClick}/>
      </Box>
    </Box>
  );
};

export default Buyer;
