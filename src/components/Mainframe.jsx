import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import TopNavBar from "./TopNavBar";
import TableData from "./TableData";
import BreadCrumbs from "./BreadCrumbs";

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

export default function Mainframe() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MainBoxContainer maxWidth="xxl">
        <MainBox>
          <TopNavBar />
          <Box sx={{ paddingInline: "16px" }}>
            <BreadCrumbs />
            <TableData />
          </Box>
        </MainBox>
      </MainBoxContainer>
    </React.Fragment>
  );
}
