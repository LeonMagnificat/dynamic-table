import { Box, CssBaseline } from "@mui/material";

import React from "react";
import TopNavBar from "../Lib/TopNavBar";
import BreadCrumbs from "../Lib/BreadCrumbs";
import BookDetailsPage from "./BookDetailsPage";
import { MainBoxContainer, MainBox } from "./Details-lib-style";

export default function BookDetails() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MainBoxContainer maxWidth="xxl">
        <MainBox>
          <TopNavBar />
          <Box sx={{ paddingInline: "16px" }}>
            <BreadCrumbs />
            <BookDetailsPage />
          </Box>
        </MainBox>
      </MainBoxContainer>
    </React.Fragment>
  );
}
