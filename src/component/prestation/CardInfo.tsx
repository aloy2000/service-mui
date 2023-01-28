import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Call } from "@mui/icons-material";
const CardInfo = () => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#ffcab0",
          opacity: "0.7",
          my: 3,
          border: "no-border",
        }}
      >
        <CardContent sx={{ p: 2, m: 2 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pr: 3,
            }}
          >
            Title
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="p"
            sx={{ mb: 3, color: "#ff6f3c" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            possimus repudiandae minima distinctio repellendus quae eius, harum
            odio assumenda modi consequatur aperiam excepturi rerum quibusdam
            optio sequi provident delectus necessitatibus.
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "red", fontWeight: "bold" }}
          >
            <Call />
            038 45 678 90
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardInfo;
