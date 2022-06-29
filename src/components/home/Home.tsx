import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";

import React, { Component } from "react";
import AiCard from "./AiCard";
import Info from "./Info";
import StatsPanel from "./StatsPanel";

const Panel = () => {
  return (
    <Container sx={{ display: "flex" }}>
      <img src="Group 1000002515.svg" alt="icon" />
      <Container maxWidth="sm" sx={{ color: "white" }}>
        <Typography variant="h5">100K+</Typography>
        <Typography variant="h6">AI modelled submissions</Typography>
      </Container>
    </Container>
  );
};

const Home = () => {
  return (
    <CssBaseline>
      <Info />
      <StatsPanel />
      <Box p={10}>
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="span" fontWeight={700}>
            Why Participate in {"  "}
          </Typography>
          <Typography variant="h4" component="span" fontWeight={700} color="success.main">
            AI Challenges?
          </Typography>
        </Container>
        <Box>
          <Grid container spacing={4} mt={7}>
            <AiCard />
            <AiCard />
            <AiCard />
            <AiCard />
          </Grid>
        </Box>
      </Box>
    </CssBaseline>
  );
};

export default Home;
