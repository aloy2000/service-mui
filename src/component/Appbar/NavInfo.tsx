import React from "react";
import {
  Button,
  Card,
} from "@mui/material";
import { NavInfoContainer, SocialProvider } from "./style";
import { Facebook, Instagram } from "@mui/icons-material";

const NavInfo = () => {
  return (
    <>
      <NavInfoContainer>
        {/* <AppBar position="static" sx={{backgroundColor:'transparent'}}>
            <Toolbar>
            <Button variant='contained'>0334556677</Button>
            </Toolbar>
        
        </AppBar> */}
        <Card
          sx={{
            background: "#38598b",
            display: "flex" /* couleur de fond avec transparence */,
            /* flou */
          }}
        >
          <SocialProvider>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#fff",
                mr: 6,
                "&:hover": { backgroundColor: "#fff" },
              }}
            >
              +334556677
            </Button>
            <Facebook sx={{ color: "white", mt: 1, mr: 6 }} />
            <Instagram sx={{ color: "white", mt: 1, mr: 6 }} />
          </SocialProvider>
        </Card>
      </NavInfoContainer>
    </>
  );
};

export default NavInfo;
