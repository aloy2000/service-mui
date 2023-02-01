import React from "react";
import { CardCompetence } from "./style";
import {
  Container,
  Card,
  Typography,
  CardContent,
  CardMedia,
  Grid,
  Button,
  CardActions,
} from "@mui/material";
import ImgCard from "../../assets/img/banners-homepage.jpg";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import PlumbingRoundedIcon from "@mui/icons-material/PlumbingRounded";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: "100%",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    border: "3px solid #178582",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  itemFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const About = () => {
  const navigate = useNavigate();
  const competences = ["Plomberie", "Serrurerie", "Électricité"];
  const classes = useStyles();

  return (
    <div id="about" style={{ marginTop: 25 }}>
      {/* <Container sx={{ pt: 5 }}>
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
          Nos differents domaines d'interventions
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
                      alt="Nos competences"
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
                        {c}
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
      </Container> */}

      <Grid container spacing={2}>
        <Grid item sm={12} md={12} xs={12} marginBottom={5}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, marginBottom: 3 }}
            align="center"
          >
            Qui sommes nous ?
          </Typography>
          <Typography color={"gray"} align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Grid>
        <Grid item sm={7} md={7} xs={12}>
          <img src="/about-img.jpg" alt="about us" className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={5} md={5}>
          <Grid container>
            <Grid item sm={12} md={12} xs={12} sx={{ marginBottom: 1 }}>
              <div className={classes.itemFlex}>
                <div className={classes.circle}>
                  <PlumbingRoundedIcon
                    color="secondary"
                    sx={{ fontSize: 32 }}
                  />
                </div>
                <div>
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    color="gray"
                    padding={2}
                    textAlign={"justify"}
                  >
                    Plomberie
                  </Typography>
                  <Typography alignSelf={"flex-end"} color={"gray"}>
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={12} xs={12} sx={{ marginBottom: 1 }}>
              <div className={classes.itemFlex}>
                <div className={classes.circle}>
                  <ElectricBoltRoundedIcon
                    color="secondary"
                    sx={{ fontSize: 32 }}
                  />
                </div>
                <div>
                  <Typography
                    variant="h5"
                    color="gray"
                    fontWeight={600}
                    padding={2}
                    textAlign={"justify"}
                  >
                    Electricité
                  </Typography>
                  <Typography alignSelf={"flex-end"} color={"gray"}>
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={12} xs={12} sx={{ marginBottom: 1 }}>
              <div className={classes.itemFlex}>
                <div className={classes.circle}>
                  <LockOpenRoundedIcon
                    color="secondary"
                    sx={{ fontSize: 32 }}
                  />
                </div>
                <div>
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    padding={2}
                    color="gray"
                    textAlign={"justify"}
                  >
                    Serrurerie
                  </Typography>
                  <Typography alignSelf={"flex-end"} color={"gray"}>
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
