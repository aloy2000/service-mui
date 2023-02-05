import React from "react";
import { Card, Typography, Grid } from "@mui/material";
import { DevisCard } from "./style";

const TypeDevis = ({ title, price }: IProps) => {
  return (
    <>
      <Card sx={{ height: "40px", mb: 2 }}>
        <DevisCard>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={9} md={9}>
              <Typography component="p">{title}</Typography>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
                <Typography
                  component="p"
                  sx={{
                    ml: 1,
                  }}
                >
                  {price}
                </Typography>
            </Grid>
          </Grid>
        </DevisCard>
      </Card>
    </>
  );
};

interface IProps {
  title: string;
  price: string;
}

export default TypeDevis;
