import React from "react";
import { Typography, CardMedia, Container } from "@mui/material";
import { PrestationDetails } from "./style";
import { useParams } from "react-router-dom";
import Img from "../../assets/img/banners-homepage.jpg";
import CardInfo from "./CardInfo";
const PresentationItem = () => {
  const params = useParams();
  return (
    <>
      <Container>
        <PrestationDetails>
          {/* {title } */}
          <Typography
            variant="h5"
            component="h1"
            sx={{ mb: 3, fontWeight: "bold" }}
          >
            {" "}
            PRESTATION {params.id}{" "}
          </Typography>
          <div>
            {/* {image details} */}
            <CardMedia
              component="img"
              height="340"
              width="30px"
              image={Img}
              alt="green iguana"
              sx={{ mb: 3 }}
            />
          </div>
          {/* subtitle */}
          <Typography
            variant="h6"
            component="h3"
            sx={{ my: 3, fontWeight: "bold" }}
          >
            Prestation {params.id}
          </Typography>
          {/* {Description} */}
          <Typography variant="body2" component="p" sx={{ mb: 3 }}>
            Il est toujours préférable de bien vérifier et entretenir les
            matériels de tuyauterie. C'est pour cela que mise à part la
            réparation, nous faisons aussi la vérification de tous vos
            cannalisations car plus on attends la réparation, plus les coûts
            vont être énormes.
          </Typography>

          <Typography variant="body2" component="p" sx={{ mb: 3 }}>
            C'est de cette manière que nous intervenons dans tout type de
            réparation en plomberie. Nous réparons tout: les tuyaux classiques
            sous l'evier,tous les robinets en cuisine ou au salle de bain, les
            baignoires et aussi les toilettes. Nous faisons tout les travaux
            dans les respects de l'art et avec professionnalisme.
          </Typography>
          {/* card info */}
          <CardInfo />
        </PrestationDetails>
      </Container>
    </>
  );
};

export default PresentationItem;
