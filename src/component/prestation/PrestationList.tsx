import React from "react";
import { Typography, Container } from "@mui/material";
import TablePrestation from "./TablePrestation";
const PrestationList = () => {
  return (
    <>
      <Container sx={{ marginTop: 10 }}>
        <div style={{ marginTop: "40px" }}>
          <Typography variant="h4" gutterBottom sx={{ marginButtom: 12 }}>
            Domaines d'intervention
          </Typography>

          <Typography gutterBottom>
            Nous exécutons tout travaux dans le domaine de plomberie, parmi ces
            travaux, voici un tableau contenant les services et les domaines que
            nous prenons en charge
          </Typography>
        </div>
        <TablePrestation />
      </Container>
    </>
  );
};

export default PrestationList;
