import React from "react";
import { makeStyles } from "@mui/styles";
import { Avatar, Box, Card, Grid } from "@mui/material";
import { Typography } from "@mui/material";

interface UserAvatarProps {
  serviceTitle: string;
  username: string;
  date: string;
  comment: string;
  fonction: string,
  avatar: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: 5,
  },
  imgbox: {
    marginRight: "1rem",
  },
  comment: {
    marginTop: 5,
  },
  commentContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  img: {
    borderRadius: "50%",
    width: "2rem",
    border: "2px solid #cec5c5",
  },
  div4: {
    background: "#ECF5F6",
    gridColumn: 1 / 2,
    gridRow: 2 / 3,
  },
  eachDiv: {
    padding: "1rem 2rem",
    borderRadius: "0.8rem",
    boxShadow: " 5px 5px 20px #6d6b6b6b",
  },
  detbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    color: "#49505A",
    fontSize: "0.9rem",
    marginBottom: "0.1rem",
    fontWeight: 600,
  },
  designation: {
    color: "#49505A",
    opacity: "50%",
    fontSize: "0.8rem",
  },
  userDetails: {
    display: "flex",
  },
}));

const Review: React.FC<UserAvatarProps> = ({
  username,
  date,
  comment,
  fonction,
  serviceTitle,
  avatar
}) => {
  const classes = useStyles();

  return (
    <Grid item md={3} sm={6}>
      <Box className={`${classes.div4} ${classes.eachDiv}`}>
        <Box className={classes.userDetails}>
          <Box className={classes.imgbox}>
            <img
              src={avatar}
              alt=""
              className={classes.img}
            />
          </Box>
          <Box className={classes.detbox}>
            <p className={classes.name}>{username}</p>
            <p className={classes.designation}>{fonction}</p>
          </Box>
        </Box>
        <Box className="review dark">
          <h4>{serviceTitle}</h4>
          <p>
            “ {comment} ”
          </p>
          <p>{date}</p>
        </Box>
      </Box>
    </Grid>
  );
};

export default Review;
