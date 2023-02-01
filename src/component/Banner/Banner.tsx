import React from "react";
import { Typography, Button } from "@mui/material";

import { BannerSection, BannerItem } from "./style";

const Banner = () => {
  return (
    <>
      <BannerSection>
        <BannerItem>
          <Typography
            component="p"
            sx={{ mb: 4, color: "white", fontWeight: 700 }}
            variant="h1"
          >
            Bienvenue
            {/* <strong> Plomberie</strong>, en <strong>Serrurie</strong> ou en{" "}
            <strong>Electricité</strong> ? */}
          </Typography>
          <Typography component="p" sx={{ mb: 4, color: "white" }} variant="h6">
            Vous êtes le bienvenu et au bon endroit, en effet nous faisons tout
            travaux dans ces domaines à un prix très raisonnable et un service
            plus que parfait.
          </Typography>
          <Button
            variant="contained"
            sx={{ Color: "white", borderColor: "white", fontWeight: 700 }}
            size="large"
            color="secondary"
          >
            En savoir plus
          </Button>
        </BannerItem>
      </BannerSection>
    </>
  );
};

export default Banner;
