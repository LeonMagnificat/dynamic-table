import { Box, CssBaseline, Container } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import TopNavBar from "./TopNavBar";
import BreadCrumbs from "./BreadCrumbs";
import BookDetailsPage from "./BookDetailsPage";

const MainBox = styled(Box)({
  backgroundColor: "#fff",
  width: "95%",
  borderRadius: "30px",
  boxShadow: "0px 4px 50px 0px rgba(66, 68, 90, 0.11)",
  paddingInline: "30px",
});

const MainBoxContainer = styled(Container)({
  padding: "30px",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
});

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
