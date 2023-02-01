import React from "react";
//import {Typography} from '@mui/material'

import About from "./About/About";
import Devis from "./Devis/Devis";
import { Expertise } from "./Expertise/Expertise";
import { Container } from "@mui/material";
import { Contact } from "./Contact/Contact";
//import Footer from './Footer/Footer'

const Home = () => {
  return (
    <Container>
      <About />
      <Expertise />
      <Contact />
      <Devis />
    </Container>
  );
};

export default Home;
