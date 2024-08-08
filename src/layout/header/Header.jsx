import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import NavBarItem from "../../routes/components/NavBarItem";
import ROUTES from "../../routes/routesModel";
import LeftNavBar from "./left-navigation/LeftNavBar";

export default function Header() {
  return (
    <AppBar position="sticky" color="primary" elevation={10}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <LeftNavBar />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
