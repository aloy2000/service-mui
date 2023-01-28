import React, { useState } from "react";
import {
  Box,
  Menu,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
const MobileAppBar = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  // const pages = [
  //     {
  //         "title":"Home",
  //         "path": "/"
  //     },
  //     {
  //         "title":"Services",
  //         "path": '/services'
  //     },
  //     {
  //         "title":"Contact",
  //         "path": "/contact"
  //     }
  // ]
  const pages = ["Home", "Services", "Contact"];
  const [anchorElNav, setAnchorElNav] = useState<any>(null);

  // const handleOpenNavMenu = (event) => {
  //     setAnchorElNav(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* Menu triple bar */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => {
                setAnchorElNav(event.currentTarget);
              }}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{
                my: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Photos
            </Typography>

            {/* ABOUT, PROJECTS, CONTACT - small screen */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={goHome}>
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Services</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MobileAppBar;
