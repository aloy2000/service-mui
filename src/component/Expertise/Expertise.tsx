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
            Notre entreprise est née à la suite d'une passion
            pour le dépannage ce qui nous a mené à en faire un métier. Aujourd'hui, 
            nous avons décidé de vous offrir nos services à des prix biens détaillés. Comme 
            c'est une passion pour nous et à la fois un travail, nous sommes heureux de vous donner 
            le meilleur de nous même pour vous satisfaire.
            Nous souhaitons vous montrer un travail honnête et bénéfique à votre domicile.
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
             Puisque nous ne sommes jamais à l'abri de quelques soucis techniques que ce soient mineurs ou 
                majeurs, il est toujours préférable de bien entretenir les matériels de tuyauteries, d'éléctricité ou de serrurie de chez vous. 
                En cas de problème, n'hésitez pas à nous contacter car nous sommes toujours disponibles 
                pour nos clients et nous intervenons dans les plus brefs délais.<br/><br/>
                N'attendez plus, faites appel à un expert qui répare en un rien de temps votre équipement de plomberie:
                <li>Tuyauterie</li>
                <li>Chauffe-eau</li>
                <li>Robinets (cuisine et salle de bain)</li>
                <li>Baignoire</li>
                <li>Toilettes</li>
                <li>Evier</li>
                Nous vérifions et réparons aussi si besoin vos circuits éléctriques comme:
                <li>Interrupteurs</li>
                <li>Les prises de courant</li>
                <li>Les circuits et différents branchements</li>
                Tous les travaux de sérrurier pour les:
                <li>Portes</li>
                <li>Fenêtres</li>
                <li>Baies vitrées</li>
                <li>Vérandas</li>
                <li>Verrières</li>
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
          marginTop: 5,
        }}
      >
        Trouver un intervenant proche de vous.
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
