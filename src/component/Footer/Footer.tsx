import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import { FooterContainer } from "./style";

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      sx={{ color: "white" }}
      color="text.secondary"
      align="center"
      {...props}
    >
      'Copyright ©
      <Link
        color="inherit"
        href="https://mui.com/"
        sx={{ textDecoration: "none" }}
      >
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <div id="contact">
      <FooterContainer>
        <Container
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            py: [3, 6],
          }}
        >
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
                  {footer.title}
                </Typography>

                {footer.description.map((item) => (
                  <Typography
                    key={item}
                    variant="body2"
                    sx={{ color: "#fff", cursor: "pointer", display: "block" }}
                  >
                    {item}
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </FooterContainer>
    </div>
  );
};

export default Footer;
