import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export const DrawerComp = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItem
            component="a"
            href="#home"
            onClick={() => {
              handleClick();
            }}
          >
            <ListItemText primary="Accueil" />
          </ListItem>
          <ListItem
            component="a"
            href="#about"
            onClick={() => {
              handleClick();
            }}
          >
            <ListItemText primary="A propos" />
          </ListItem>
          <ListItem
            component="a"
            href="#service"
            onClick={() => {
              handleClick();
            }}
          >
            <ListItemText primary="Service" />
          </ListItem>
          <ListItem
            component="a"
            href="#contact"
            onClick={() => {
              handleClick();
            }}
          >
            <ListItemText primary="Contact" />
          </ListItem>
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
