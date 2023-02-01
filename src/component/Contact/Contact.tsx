import React from "react";
import { Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { makeStyles } from "@mui/styles";
import EmailIcon from "@mui/icons-material/Email";
import { Phone } from "@mui/icons-material";
import { FormLocation } from "../FormLocation/FormLocation";

const useStyles = makeStyles(() => ({
  itemFlex: {
    display: "flex",
    padding: 5,
  },
}));

export const Contact = () => {
  const classes = useStyles();

  return (
    <div
      id="contact"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        marginTop={10}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item sm={12} md={12} xs={12} marginBottom={5}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, marginBottom: 3 }}
            align="center"
          >
            Trouver une personne proche
          </Typography>
          <Typography color={"gray"} align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Grid>
        <Grid item md={3} sm={12} marginRight={5}>
          <Grid container>
            <Grid item className={classes.itemFlex} md={12} sm={12}>
              <EmailIcon color="secondary" />
              <Typography sx={{ marginLeft: 2 }}>
                ramanandraibenirina@gmail.com
              </Typography>
            </Grid>
            <Grid item className={classes.itemFlex} md={12} sm={12}>
              <Phone color="secondary" />
              <Typography sx={{ marginLeft: 2 }}>+1 5589 55488 55s</Typography>
            </Grid>
            <Grid item className={classes.itemFlex} md={12} sm={12}>
              <LocationOnIcon color="secondary" />
              <Typography sx={{ marginLeft: 2 }}>
                7 rue des Fleurs 37000 Tours
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={7} sm={12}>
          <FormLocation />
        </Grid>
      </Grid>
    </div>
  );
};
