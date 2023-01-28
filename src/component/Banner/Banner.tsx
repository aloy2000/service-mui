import React from "react";
import { Typography, Button } from "@mui/material";

import { BannerSection, BannerItem } from "./style";

const Banner = () => {
  return (
    <>
      <BannerSection>
        <BannerItem>
          <Typography component="p" sx={{ mb: 4 }} variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </Typography>
          <Typography component="p" sx={{ mb: 4 }} variant="h6">
            Hello, Tenetur id distinctio fugiat et adipisci nemo in dicta nam
            doloremque ad asperiores officiis consequuntur, placeat omnis velit
            esse architecto illo. Eos.
          </Typography>
          <Button variant="contained" sx={{ Color: "#f5f5f5" }}>
            See more{" "}
          </Button>
        </BannerItem>
      </BannerSection>
    </>
  );
};

export default Banner;
