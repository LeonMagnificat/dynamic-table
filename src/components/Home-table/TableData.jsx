import * as React from "react";
import Table from "@mui/material/Table";
import { Box, Typography, TableHead, TableRow, Paper } from "@mui/material";
import TableRowItem from "./TableRowItem";
import { useSelector } from "react-redux";
import { CustomTableCell, StyledTableContainer } from "./Table-lib-style";

export default function TableData() {
  const booksCollection = useSelector((state) => state.books.books);
  return (
    <>
      <Box sx={{ marginBlock: "15px" }}>
        <Typography sx={{ fontSize: "1.5em" }}>Nominated Books</Typography>
        <Typography>
          {booksCollection && booksCollection.length} books
        </Typography>
      </Box>
      <StyledTableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <CustomTableCell>Book Title</CustomTableCell>
              <CustomTableCell align="left">Author</CustomTableCell>
              <CustomTableCell align="left">Publisher</CustomTableCell>
              <CustomTableCell align="left">Published Date</CustomTableCell>
              <CustomTableCell align="left">Maturity Rating</CustomTableCell>
              <CustomTableCell align="left">More details</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableRowItem />
        </Table>
      </StyledTableContainer>
    </>
  );
}
