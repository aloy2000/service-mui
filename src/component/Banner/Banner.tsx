import React from "react";
import { Typography, Button } from "@mui/material";

import { BannerSection, BannerItem } from "./style";

const Banner = () => {
  return (
    <>
      <BannerSection>
        <BannerItem>
          <Typography component="p" sx={{ mb: 4 }} variant="h6">
            Êtes-vous à la recherche d'un professionnel en
            <strong> Plomberie</strong>, en <strong>Serrurie</strong> ou en{" "}
            <strong>Electricité</strong> ?
          </Typography>
          <Typography component="p" sx={{ mb: 4 }} variant="h6">
            Vous êtes le bienvenu et au bon endroit, en effet nous faisons tout
            travaux dans ces domaines à un prix très raisonnable et un service
            plus que parfait.
          </Typography>
          <Button variant="contained" sx={{ Color: "#f5f5f5" }}>
            {" "}
            En savoir plus{" "}
          </Button>
        </BannerItem>
      </BannerSection>
    </>
  );
};

export default Banner;
