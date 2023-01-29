import React from "react";
//import {Typography} from '@mui/material'

import Competence from "./Competence/Competence";
import Devis from "./Devis/Devis";
import { Expertise } from "./Expertise/Expertise";
//import Footer from './Footer/Footer'

const Home = () => {
  return (
    <>
      <Competence />
      <Expertise />
      <Devis />
    </>
  );
};

export default Home;
