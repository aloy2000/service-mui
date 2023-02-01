import React, { ReactElement } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  linkHover: {
    "&:hover": {
      color: '#178582',
      cursor: 'pointer'
    },
  },
 
});

export const CustomizeCard = ({ title, icon }: IProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Grid item sm={12} md={3}>
      <Box
        style={{
          position: "relative",
          paddingTop: 80,
        }}
      >
        <Box
          style={{
            backgroundColor: theme.palette.secondary.main,
            border: "solid 1px secondary",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            position: "absolute",
            top: 40,
            left: "50%",
            transform: "translatex(-50%)",
            borderRadius: "100%",
            color: "#fff",
            
          }}
        >
          {icon}
        </Box>
        <Box
          style={{
            top: 80,
            border: "solid 1px gray",
            textAlign: "center",
            paddingTop: 60,
            paddingLeft: 40,
            paddingRight: 40,
            paddingBottom: 40,
          }}
        >
          <Typography
            variant="h5"
            onClick={() => navigate(`/prestation/${title}`)}
            className={classes.linkHover}
            
          >
            {title}
          </Typography>
          <Typography
            style={{
              paddingTop: 10,
            }}
          >
            Voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

interface IProps {
  icon: ReactElement;
  title: string;
}
