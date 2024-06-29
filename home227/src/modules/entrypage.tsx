import { Box, Link, Typography } from "@mui/material";
import React from "react";
import bearpic from "../../src/assets/bear-breakcore.gif";

interface Styling {
  [key: string]: string;
}

interface StylingGuideline {
  [key: string]: Styling;
}

const HomePage = () => {
  const homePageStyling: StylingGuideline = {
    junction: {
      height: "60%",
      width: "70%",
      backgroundColor: "#FFE9D0",
      borderRadius: "0px 10px 10px 0px",
      paddingTop: "6%",
    },
    surroundingJunction: {
      height: "100%",
      width: "100%",
      backgroundColor: "#FFFED3",
      display: "flex",
      alignItems: "center",
    },
    titleText: {
      fontSize: "4vw",
      paddingLeft: "3vh",
      fontFamily: "Roboto Mono",
      fontWeight: "700vh",
      fontStyle: "italic",
    },
    normalText: {
      fontSize: "2vw",
      fontFamily: "Roboto Mono",
      fontWeight: "300vh",
      fontStyle: "normal",
    },
    imgBox: {
      paddingLeft: "20px",
      paddingTop: "20px",
      width: "200px",
      display: "flex",
      flexDirection: "column",
    },
  };
  return (
    <Box sx={homePageStyling.surroundingJunction}>
      <Box sx={homePageStyling.junction}>
        <Typography variant="h1" sx={homePageStyling.titleText}>
          home.227
        </Typography>
        <Box sx={homePageStyling.imgBox}>
          <img
            src={bearpic}
            alt="breakcoreBear"
            style={{ height: "200px", paddingBottom: "20px" }}
          ></img>
          <Link
            href="https://github.com/P3-J"
            sx={homePageStyling.normalText}
            underline="none"
          >
            Github
          </Link>
          <Link
            href="https://cyanfrost.itch.io/"
            sx={homePageStyling.normalText}
            underline="none"
          >
            Itch.io
          </Link>
          <Link href="/enter"> Enter </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
