import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardActions,
  Box,
  Fab,
} from "@mui/material";
import { DevisList, PrestationContainer } from "./style";
import AlertInfo from "./AlertInfo";
import TypeDevis from "./TypeDevis";
import PrestationList from "./PrestationList";
import PresentionItem from "./PresentationItem";
import VilleIntervention from "./VilleIntervention";
import Foire from "../FAQ/Foire";
import { Call } from "@mui/icons-material";

const devis = [
  {
    id: 1,
    title: "Devis en ligne",
    price: "Gratuit",
  },
  {
    id: 2,
    title: "Frais de déplacement",
    price: "$ 100",
  },
  {
    id: 3,
    title: "Main d'oeuvre",
    price: "$ 300",
  },
];

const Prestation = () => {
  //const params = useParams();
  //console.log('param',params)

  return (
    <Box>
      <PrestationContainer sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PresentionItem />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  width: "30%",
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Nos tarifs d'intervention.
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    sx={{ mb: 3 }}
                  >
                    Vous cherchez un prix pour vos travaux et dépannages ? Voici
                    nos tarifs avec des prix très raisonnables. Néanmoins ces
                    prix peuvent changer selon le cas rencontré.
                  </Typography>
                  {/* typedevis */}
                  <DevisList>
                    {devis.map((devi) => (
                      <TypeDevis
                        key={devi.id}
                        title={devi.title}
                        price={devi.price}
                      />
                    ))}
                  </DevisList>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button variant="contained">Demander Devis</Button>
                </CardActions>
              </Card>
            </Box>

            {/* {alert info} */}
          </Grid>
        </Grid>
        <Grid item>
          <Box px={8}>
            <AlertInfo />
          </Box>
        </Grid>
        <PrestationList />
        <VilleIntervention />
      </PrestationContainer>
      <Foire />
      <Box
        sx={{
          position: "fixed",
          right: 20,
          bottom: 80,
          display: "flex",
          flexDirection: "row",
          maxWidth: {
            xs: 300,
            sm: 400,
          },
          gap: 2,
        }}
      >
        <Card>
          <Box width={260} padding={2}>
            <Typography>
              Si vous avez besoin d'une intervention d'urgence, notre numéro est
              toujours disponible 24/24h pour recevoir votre appel. Soyez sans
              crainte car nos intervenants seront chez vous dans les meilleurs
              délais possibles.
            </Typography>
          </Box>
        </Card>
        <Fab>
          <Call />
        </Fab>
      </Box>
    </Box>
  );
};

export default Prestation;
