import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Typography,
  Grid,
  Tabs,
  Tab,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { DrawerComp } from "./DrawerComp";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [valueOfLink, setValueOfLink] = React.useState(0);

  function handleClickView(id: string) {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const navigate = useNavigate()

  return (
    <>
      
      <AppBar>
        <Toolbar>
          {smallScreen ? (
            <>
              <Typography>Logo</Typography>
              <DrawerComp />
            </>
          ) : (
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={2}>
                <Typography>Logo</Typography>
              </Grid>
              <Grid item xs={6}>
                <Tabs
                  textColor="inherit"
                  value={valueOfLink}
                  onChange={(event, value) => {
                    setValueOfLink(value);
                  }}
                >
                  <Tab
                    label={"Accueil"}
                    onClick={() => navigate("/")}
                  />
                  <Tab
                    label={"A propos"}
                    onClick={() => handleClickView("about")}
                  />
                  <Tab
                    label={"Nos services"}
                    onClick={() => handleClickView("service")}
                  />
                  <Tab
                    label={"Contact"}
                    onClick={() => handleClickView("contact")}
                  />
                  <Tab
                    label={"Devis"}
                    onClick={() => handleClickView("devis")}
                  />
                  {/* <Tab label={"A propos"} /> */}
                </Tabs>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={3}>
                <Box sx={{ display: "flex" }}>
                  <FacebookIcon sx={{ marginLeft: "auto" }} />
                  <TwitterIcon sx={{ marginLeft: 2 }} />
                  <InstagramIcon sx={{ marginLeft: 2 }} />
                </Box>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
