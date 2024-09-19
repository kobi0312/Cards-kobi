import React from "react";
import { Typography } from "@mui/material";
import NavBarLink from "../../../routes/components/NavBarLink";
import ROUTES from "../../../routes/routesModel";

export default function Logo() {
  return (
    <>
      <NavBarLink to={ROUTES.ROOT}>
        <Typography
          variant="h4"
          sx={{
            mx: 2,
            fontFamily: "fantasy",
            display: { xs: "none", md: "inline-flex" },
          }}
        >
          KS-DIGITAL
        </Typography>
      </NavBarLink>
    </>
  );
}
