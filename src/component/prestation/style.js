import { styled } from "@mui/material/styles";

export const PrestationContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 4),
}));
export const PrestationDetails = styled("div")(({ theme }) => ({}));

export const DevisList = styled("div")(({ theme }) => ({}));

export const DevisCard = styled("div")(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(1, 3),
  marginBottom: "10px",
  gap: 10,
}));

export const PriceDevis = styled("div")(({ theme }) => ({
  backgroundColor: "#178582",
  borderRadius: "9px",
  color: 'white',
  width: '30%',

}));
