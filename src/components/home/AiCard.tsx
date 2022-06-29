import { Grid, Typography, Container } from "@mui/material";

import React from "react";

const AiCard = () => {
  return (
    <Grid item xs={6}>
      <Container
        sx={{
          bgcolor: "rgba(0,0,0,0.03)",
          p: 5,
          borderRadius: 3,
        }}>
        <img src="Robot.svg" alt="Robot" />
        <Typography variant="h5">Prove Your Skills</Typography>
        <Typography variant="subtitle2" paragraph>
          Gain Substantial experience by solving real-world problems and pit against others to
          come up with innovative solutions.
        </Typography>
      </Container>
    </Grid>
  );
};

export default AiCard;
