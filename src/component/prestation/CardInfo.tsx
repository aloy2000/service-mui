import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Call } from "@mui/icons-material";
const CardInfo = () => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#ECF5F6",
          opacity: "0.9",
          mb: 10,
          mt: 10,
          border: "no-border",
        }}
      >
        <CardContent sx={{ p: 2, m: 2 }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pr: 3,
              color: '#281918'
            }}
          >
            URGENCE
          </Typography>
          <Typography gutterBottom component="p" sx={{ color: "#281918" }}>
            Si vous avez besoin d'une intervention d'urgence, notre numéro est
            toujours disponible 24/24h pour recevoir votre appel. Soyez sans
            crainte car nos intervenants seront chez vous dans les meilleurs
            délais possibles.
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            <Call />
            +1 38 45 678 90
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardInfo;
