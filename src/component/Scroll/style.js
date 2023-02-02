import { styled } from "@mui/material/styles";

export const ScrollBtn = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: "45px",
  zIndex: 30,
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  position: "fixed",
  right: 20,
  bottom: 20,
  borderRadius: "4px",
}));
