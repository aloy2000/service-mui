import { Header } from "../header/Header";
import NavInfo from "./NavInfo";

const Navbar = () => {
//   const theme = useTheme();
//const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {/* {matches ? <Header/> :<Header />} */}
      <NavInfo />
      <Header />
    </>
  );
};

export default Navbar;
