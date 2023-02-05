import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardActions,
  Box,
  Container,
} from "@mui/material";
import { DevisList, PrestationContainer } from "./style";
import AlertInfo from "./AlertInfo";
import TypeDevis from "./TypeDevis";
import PrestationList from "./PrestationList";
import PresentionItem from "./PresentationItem";
import VilleIntervention from "./VilleIntervention";
import Foire from "../FAQ/Foire";
import { Contact } from "../Contact/Contact";
import Devis from "../Devis/Devis";
import Review from "../Review/Review";

const numberOfAvis = [0, 1, 2, 3];

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
      <PrestationContainer sx={{ mt: 10 }}>
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
                  padding: 5,
                  width: "90%",
                  backgroundColor: "#ECF5F6",
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
                  <Typography gutterBottom component="p" sx={{ mb: 3 }}>
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
                  <Button variant="contained" color="primary">
                    Demander Devis
                  </Button>
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
      <Container>
        <Contact />
        <Devis />
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, marginBottom: 3, marginTop: 10 }}
          align="center"
        >
          Les avis de nos clients
        </Typography>
        <Grid container spacing={3}>
          {numberOfAvis.map(function () {
            return (
              <Review
                serviceTitle="Reparation pompe"
                username="Christine Marie"
                fonction="fonction"
                date="22 Mai 2022"
                comment="Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love"
                avatar="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg"
              />
            );
          })}
        </Grid>
      </Container>
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
      ></Box>
    </Box>
  );
};

export default Prestation;
