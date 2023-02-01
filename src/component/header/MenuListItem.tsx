import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export const MenuListItem = ({ name, updateOpen, id }: IMenuListItem) => {

  

  return (
    <ListItemButton onClick={() => updateOpen(id)} divider>
      <ListItemIcon>
        <ListItemText sx={{ color: "white" }}>{name}</ListItemText>
      </ListItemIcon>
    </ListItemButton>
  );
};

interface IMenuListItem {
  name: string;
  id: string;
  updateOpen: (id: string) => void;
}
