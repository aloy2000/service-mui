import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";

const Intervention = [
  {
    value: "electricien",
    label: "Électricien",
  },
  {
    value: "plombier",
    label: "Plombier",
  },
  {
    value: "serrurier",
    label: "Serrurier",
  },
];

export const FormLocation = () => {
  const [intervention, setIntervention] = React.useState("electricien");
  const [postal, setPostal] = React.useState("");
  const [city, setCity] = React.useState("");

  const handleSubmit = () => {
    //faire quelque chose
    console.log(postal, intervention, city);
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <FormControl variant="standard">
        <TextField
          id="outlined-select-currency"
          select
          label="Choisir le service"
          defaultValue="electricien"
          value={intervention}
          onChange={(e) => setIntervention(e.target.value)}
          sx={{ width: 300 }}
        >
          {Intervention.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      <TextField
        id="ville"
        label="Ville"
        variant={"outlined"}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        sx={{ width: 300 }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 3,
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <TextField
          id="postal"
          label="Code postal"
          variant={"outlined"}
          value={postal}
          onChange={(e) => setPostal(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          sx={{ width: 300 }}
        />
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Envoyer
        </Button>
      </Box>
    </Box>
  );
};
