import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TopNavBar from "../Lib/TopNavBar";
import TableData from "./TableData";
import BreadCrumbs from "../Lib/BreadCrumbs";
import { MainBox, MainBoxContainer } from "./Table-lib-style";

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
