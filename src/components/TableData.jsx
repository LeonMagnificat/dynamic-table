import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import TableRowItem from "./TableRowItem";
import { useSelector } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fff",
    color: "#B1B1B1",
    width: "20%",
    borderBottom: "none",
    position: "sticky",
    top: 0,
    zIndex: "1",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function TableData() {
  const booksCollection = useSelector((state) => state.books.books);
  return (
    <>
      <Box sx={{ marginBlock: "15px" }}>
        <Typography sx={{ fontSize: "2em" }}>Nominated Books</Typography>
        <Typography>
          {booksCollection && booksCollection.length} books
        </Typography>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          maxHeight: "calc(85vh - 150px)",
          overflow: "auto",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Book Title</StyledTableCell>
              <StyledTableCell align="left">Author</StyledTableCell>
              <StyledTableCell align="left">Publisher</StyledTableCell>
              <StyledTableCell align="left">Published Date</StyledTableCell>
              <StyledTableCell align="left">Maturity Rating</StyledTableCell>
              <StyledTableCell align="left">Purchase</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableRowItem />
        </Table>
      </TableContainer>
    </>
  );
}
