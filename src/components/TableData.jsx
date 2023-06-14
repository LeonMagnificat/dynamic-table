import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import TableRowItem from "./TableRowItem";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "transparent",
    color: "#B1B1B1",
    width: "25%",
    borderBottom: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function TableData() {
  return (
    <>
      <Box sx={{ marginBlock: "15px" }}>
        <Typography sx={{ fontSize: "2em" }}>Nominated Books</Typography>
        <Typography>18 total books</Typography>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          maxHeight: "calc(75vh - 150px)",
          overflow: "auto",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Book Title</StyledTableCell>
              <StyledTableCell align="left">Author</StyledTableCell>
              <StyledTableCell align="left">ID</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
              <StyledTableCell align="left">Votes</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableRowItem />
        </Table>
      </TableContainer>
    </>
  );
}
