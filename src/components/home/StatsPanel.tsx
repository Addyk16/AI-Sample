import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const StatsPanel = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "rgb(9,50,70)",
          pt: 10,
          pb: 10,
          pl: 10,
          textAlign: "center",
          // justifyContent: "center",
        }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid container item spacing={3} sm={3}>
            <Grid item>
              <img src="Group 1000002515.svg" alt="AI" />
            </Grid>
            <Grid item>
              <Typography variant="h5" color="whitesmoke">
                100K+
              </Typography>
              <Typography variant="body1" color="whitesmoke">
                AI model Submissions
              </Typography>
            </Grid>
          </Grid>
          <Grid item sm={1}>
            <Box sx={{ bgcolor: "white", width: 2, height: 1 }} />
          </Grid>
          <Grid container item spacing={3} sm={3}>
            <Grid item>
              <img src="Group 1000002516.svg" alt="AI" />
            </Grid>
            <Grid item>
              <Typography variant="h5" color="whitesmoke">
                50K+
              </Typography>
              <Typography variant="body1" color="whitesmoke">
                Data Scientists
              </Typography>
            </Grid>
          </Grid>
          <Grid item sm={1}>
            <Box sx={{ bgcolor: "white", width: 2, height: 1 }} />
          </Grid>
          <Grid container item spacing={3} sm={3}>
            <Grid item>
              <img src="Group 1000002518.svg" alt="AI" />
            </Grid>
            <Grid item>
              <Typography variant="h5" color="whitesmoke">
                50K+
              </Typography>
              <Typography variant="body1" color="whitesmoke">
                AI Challenges Hosted
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default StatsPanel;
