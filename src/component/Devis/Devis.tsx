import { Grid, Typography, Container } from "@mui/material";
import FormDevis from "./FormDevis";
import ReactPlayer from "react-player";

const Devis = () => {
  return (
    <div id="devis">
      <Container sx={{ mt: 20 }}>
        {/* {title} */}
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, marginBottom: 3 }}
          align="center"
        >
          Demander un dévis
        </Typography>
        {/* {subtitle} */}
        <Typography color={"gray"} align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={12} sm={12} sx={{ mt: 8 }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width={"100%"}
              height={500}
            />
          </Grid>
          <Grid item md={6} sm={6} sx={{ mt: 8 }}>
            <Typography >
              Avez-vous besoin d'une intervention d'<strong>urgence</strong>{" "}
              d'un expert en plomberie, éléctricité ou serrurie ?
            </Typography>
            <Typography gutterBottom color="gray">
              Pour une intervention d'urgence, vous n'avez qu'à cocher la case
              être rappelé immédiatement. Après la complétion de votre demande,
              merci de bien détailler le plus possible vos problème.
            </Typography>

            {/* {paragraph 2} */}

            <div style={{ marginTop: "20px" }}>
              <Typography color="gray">
                Besoin d'une intervention d'un artisan qualifié pour votre
                serrurerie, plomberie ou électricité ?
              </Typography>
              <Typography gutterBottom color="gray">
                Pour une intervention simple, nous vous demandons de remplir le
                formulaire suivant en y insérant les informations demandées pour
                qu'on intervienne chez vous dans les meilleurs délais. Veuillez
                détailler les problèmes rencontrés.
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} sm={6}>
            <FormDevis />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Devis;
