import React from "react";
import {
  Container,
  Box,
  Button,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  TextareaAutosize,
} from "@mui/material";
import IUser from "../../models/User";

const FormDevis = () => {
  const [name, setName] = React.useState<string>();
  const [phone, setPhone] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [postal, setPostal] = React.useState<string>();
  const [check, setCheck] = React.useState<string>("off");
  const [problem, setProblem] = React.useState<string>();

  const handleSubmit=() => {
    //do something
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Nom et prénom"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nom et prénom"
                  autoFocus
                  value={name}
                  onChange={(e) => {
                    setName(name);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Votre email"
                  name="email"
                  autoComplete="family-name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="postal"
                  label="Code postal"
                  name="postal"
                  autoComplete="postal"
                  value={postal}
                  onChange={(e) => setPostal(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Numéro téléphone"
                  name="phone"
                  autoComplete="off"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}  
                  placeholder="Décrire ici..."
                  style={{ width: "100%", height: "100px" }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary"  onChange={(e) => setCheck(e.target.value)}/>
                  }
                  label="Être rappelé immédiatement."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: "none" }}
              onClick={handleSubmit}
            >
              Envoyer une demande
            </Button>
            <Grid container justifyContent="flex-end"></Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default FormDevis;
