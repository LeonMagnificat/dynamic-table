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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "none",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    cursor: "pointer",
    transition: "ease .5s",
    borderBottom: "none",
    "&:hover": {
      backgroundColor: "#DDFBFF",
      transition: "ease .5s",
    },
  },
  "&:nth-of-type(even)": {
    cursor: "pointer",
    borderBottom: "none",
    transition: "ease .5s",

    "&:hover": {
      backgroundColor: "#DDFBFF",
      transition: "ease .5s",
    },
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TableRowItem() {
  return (
    <TableBody>
      {rows.map((row) => (
        <StyledTableRow key={row.name} sx={{}}>
          <StyledTableCell component="th" scope="row">
            {row.name}
          </StyledTableCell>
          <StyledTableCell align="left">{row.calories}</StyledTableCell>
          <StyledTableCell align="left">{row.fat}</StyledTableCell>
          <StyledTableCell align="left">{row.carbs}</StyledTableCell>
          <StyledTableCell align="left">{row.protein}</StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
}
