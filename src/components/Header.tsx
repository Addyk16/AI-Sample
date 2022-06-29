import React from "react";
import { CssBaseline, AppBar, Toolbar, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import { Container } from "@mui/system";

const Header: React.FC = () => {
  return (
    <CssBaseline>
      <AppBar position="relative" color="transparent">
        <Toolbar>
          <img src="logo.webp" alt="DPhi" width={40} />

          <Typography variant="h6" color="inherit" noWrap sx={{ ml: 2 }}>
            DPhi
          </Typography>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
};

export default Header;
