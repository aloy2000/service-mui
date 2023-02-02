import React from "react";
import { Card, Typography } from "@mui/material";
import { DevisCard } from "./style";
import { LocationCity } from "@mui/icons-material";

const CardVille = ({ ville }: Iprops) => {
  return (
    <>
      <Card
        sx={{
          height: "40px",
          mb: 2,
          boxShadow: "none",
          borderRadius: 10,
          bgcolor: "transparent",
          border: "solid 1px gray",
        }}
      >
        <DevisCard>
          <LocationCity />
          <Typography variant="body2" component="p">
            {ville}
          </Typography>
        </DevisCard>
      </Card>
    </>
  );
};

interface Iprops {
  ville: string;
}

export default CardVille;
