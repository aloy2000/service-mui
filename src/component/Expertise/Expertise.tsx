import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { FormLocation } from "../FormLocation/FormLocation";

export const Expertise = () => {
  return (
    <Container>
      <Grid container marginTop={5}>
        <Grid item xs={12}>
          <Typography
            align="justify"
            sx={{ fontSize: 16, paddingLeft: 8, paddingRight: 8 }}
            color={"gray"}
          >
            L'entreprise Etienne service est née à la suite d'une passion pour
            le dépannage à domicile, un père lui-même artisan ayant transmit à
            ses fils la passion de l'artisanat. Aujourd'hui, notre entreprise à
            décidé de jouer carte sur table afin de pouvoir proposer à ses
            clients des prix détaillés et clairs, nous souhaitons redorer le
            blason du vrai artisanat français et lui retirer l'étiquette qu'il a
            actuellement.
          </Typography>
          <Typography
            align="justify"
            sx={{
              fontSize: 16,
              paddingLeft: 8,
              paddingRight: 8,
              marginTop: 1,
              marginButtom: 5,
            }}
            color={"gray"}
          >
            L'entreprise Etienne service est née à la suite d'une passion pour
            le dépannage à domicile, un père lui-même artisan ayant transmit à
            ses fils la passion de l'artisanat. Aujourd'hui, notre entreprise à
            décidé de jouer carte sur table afin de pouvoir proposer à ses
            clients des prix détaillés et clairs, nous souhaitons redorer le
            blason du vrai artisanat français et lui retirer l'étiquette qu'il a
            actuellement.
          </Typography>
        </Grid>
      </Grid>
      <Typography
        variant="h5"
        component="h1"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          marginTop: 5
        }}
      >
        Nos differents domaines d'intervention
      </Typography>
      <Grid container marginTop={5}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <FormLocation />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Container>
  );
};
