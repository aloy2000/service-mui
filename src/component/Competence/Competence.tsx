import React from "react";
import { CardCompetence, CardActionContent } from "./style";
import {
  Container,
  Card,
  Typography,
  CardContent,
  CardActionArea,
  CardMedia,
  Grid,
  Button,
  CardActions,
} from "@mui/material";
import ImgCard from "../../assets/img/banners-homepage.png";

import { Link, useNavigate } from "react-router-dom";

const Competence = () => {
  const navigate = useNavigate();
  const competences = [0, 1, 2];

  // const checkPrestation = (c) => {
  //     navigate(`/prestation/${c}`)

  // }

  return (
    <div id="service">
      <Container sx={{ pt: 5 }}>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Nos differents domaines d'intervention
        </Typography>
        <CardCompetence>
          <Container maxWidth="md">
            <Grid container spacing={5}>
              {competences.map((c) => (
                <Grid key={c} item xs={12} sm={6} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={ImgCard}
                      alt="green iguana"
                    />
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
                        Plomberie
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{ textTransform: "none" }}
                        onClick={() => navigate(`/prestation/${c}`)}
                      >
                        Voir prestation
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </CardCompetence>
      </Container>
    </div>
  );
};

export default Competence;
