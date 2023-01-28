import { Grid, Typography, Container } from "@mui/material";
import FormDevis from "./FormDevis";
import ReactPlayer from "react-player";

const Devis = () => {
  return (
    <>
      <Container sx={{ mt: 6 }}>
        {/* {title} */}
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Nos Devis
        </Typography>
        {/* {subtitle} */}
        <Typography
          variant="body2"
          component="p"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Nous faisons vos devis ou interventions d'urgence en plomberie, éléctricité et serrurie.
        </Typography>
        {/* {paragraph 1} */}
        <Grid container spacing={3}>
          <Grid item md={3} sm={4} sx={{ mt: 8 }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width={'100%'}
              height={200}
            />
          </Grid>
          <Grid item md={5} sm={4} sx={{ mt: 8 }}>
            <Typography gutterBottom variant="body2" component="h2">
              Avez-vous besoin d'une intervention d'<strong>urgence</strong> d'un expert en plomberie, éléctricité 
              ou serrurie ?
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
              Pour une intervention d'urgence, vous n'avez qu'à cocher la case être rappelé immédiatement.
              Après la complétion de votre demande, merci de bien détailler le plus possible vos 
              problème.
            </Typography>

            {/* {paragraph 2} */}

            <div style={{ marginTop: "20px" }}>
              <Typography gutterBottom variant="body2" component="h2">
              Besoin d'une intervention d'un artisan qualifié pour votre
              serrurerie, plomberie ou électricité ?
              </Typography>
              <Typography gutterBottom variant="body2" component="p">
              Pour une intervention simple, nous vous demandons de remplir le formulaire suivant en y 
              insérant les informations demandées pour qu'on intervienne chez vous dans les meilleurs délais. 
              Veuillez détailler les problèmes rencontrés.
              </Typography>
            </div>
          </Grid>
          <Grid item md={4} sm={2}>
            <FormDevis />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Devis;
