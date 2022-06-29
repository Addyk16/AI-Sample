import { Box, Button, Grid, Typography } from "@mui/material";

const Info = () => {
  return (
    <Box
      sx={{
        p: 20,
        pt: 13,
        pb: 10,
        bgcolor: "rgb(12,55,77)",
      }}>
      <Grid container spacing={12}>
        <Grid container item sm={7}>
          <Grid item sm>
            <Box sx={{ backgroundColor: "rgb(230,210,90)", width: 9, height: 120 }} />
          </Grid>
          <Grid item sm={11}>
            <Typography variant="h3" color="whitesmoke">
              Accelerate Innovation
            </Typography>
            <Typography variant="h3" gutterBottom color="whitesmoke">
              with Global AI Challenges
            </Typography>
            <Typography variant="h6" paragraph mt={5} color="whitesmoke">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacus mauris,
              fermentum vitae tellus a, pharetra cursus magna. Sed non laoreet ligula, ac
              imperdiet magna. Suspendisse nec magna eget ligula vehicula elementum vel ut
              neque.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                padding: 1.2,
                backgroundColor: "white",
                color: "inherit",
                borderRadius: 3,

                // width: 200,
              }}>
              Create Challaenge
            </Button>
          </Grid>
        </Grid>
        <Grid item sm={3}>
          <img src="Rocket.svg" alt="DPhi" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Info;
