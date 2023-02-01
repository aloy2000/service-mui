import { Header } from "../header/Header";

const Navbar = () => {
//   const theme = useTheme();
//const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {/* {matches ? <Header/> :<Header />} */}
      <Header />
    </>
  );
};

export default Navbar;
