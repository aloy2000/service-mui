import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton, Drawer, List } from "@mui/material";
import { MenuListItem } from "./MenuListItem";

export const DrawerComp = () => {
  const [open, setOpen] = React.useState(false);

  const updateOpen = (id:string) => {
    const target = document.getElementById(id);
    console.log()
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "rgba(9,9,121,1)" },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          <MenuListItem name="Accueil" updateOpen={updateOpen} id="home" />
          <MenuListItem name="A props" updateOpen={updateOpen} id="about" />
          <MenuListItem name="Nos Services" updateOpen={updateOpen} id="service" />
          <MenuListItem name="Contact" updateOpen={updateOpen} id="contact"/>
        </List>
      </Drawer>

      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <MenuRoundedIcon color="secondary" />
      </IconButton>
    </>
  );
};
