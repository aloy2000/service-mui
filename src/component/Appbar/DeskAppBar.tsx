import { AppBar, Toolbar, Typography } from "@mui/material";
//import MenuIcon from '@mui/icons-material/Menu';
import { AppBarItem } from "./style";
import { useNavigate } from "react-router-dom";

const DeskAppBar = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  function handleClickView(id: string) {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <AppBar position="fixed" sx={{ p: 1, maxWidth: "auto" }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Logo
          </Typography>

          <AppBarItem sx={{ p: 1 }}>
            {/* <Button sx={{ml:3}} variant="t" onClick={goHome}>Home</Button>
                            <Button sx={{ml:3}} variant="t" onClick={goHome}>Service</Button>
                            <Button sx={{ml:3}} variant="t" onClick={goHome}>Contact</Button> */}
            <Typography variant="h6" sx={{ ml: 3 }} onClick={goHome}>
              Accueil
            </Typography>
            <Typography
              onClick={() => handleClickView("service")}
              variant="h6"
              sx={{ ml: 3 }}
            >
              Services{" "}
            </Typography>
            <Typography
              onClick={() => handleClickView("contact")}
              variant="h6"
              sx={{ ml: 3 }}
            >
              Contact
            </Typography>
          </AppBarItem>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default DeskAppBar;
