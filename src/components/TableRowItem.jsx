import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography, Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "none",
  color: "#404D61",
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

const BookTitleCell = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const Image = styled("img")({
  height: "100%",
  width: "100%",
});

function createData(name, calories, fat, carbs, protein, cover) {
  return { name, calories, fat, carbs, protein, cover };
}

const rows = [
  createData(
    "Frozen yoghurt",
    "Darlene Robertson",
    6.0,
    24,
    4.0,
    "https://marketplace.canva.com/EAFA7N_NLQs/1/0/1003w/canva-cute-colorful-watercolor-simple-illustrated-young-adult-romance-book-cover-ooKN90UU-H0.jpg"
  ),
  createData(
    "Ice cream sandwich",
    "Aby Kijun",
    9.0,
    37,
    4.3,
    "https://marketplace.canva.com/EAFDuQrsi9c/1/0/1003w/canva-cute-green-illustrated-simple-summer-love-romance-book-cover-GP4zLi65S6U.jpg"
  ),
  createData(
    "Eclair",
    "Ryan Guti",
    16.0,
    24,
    6.0,
    "https://marketplace.canva.com/EAFJWW8enyg/1/0/1003w/canva-pink-minimalist-korean-book-cover-izfZ0bh7vFM.jpg"
  ),
  createData(
    "Cupcake",
    "South way",
    3.7,
    67,
    4.3,
    "https://marketplace.canva.com/EAFb0edAOFc/1/0/1003w/canva-dark-blue-simple-illustration-dramatic-story-book-cover-zOo1YmiHsGw.jpg"
  ),
  createData(
    "Gingerbread",
    "Darlene Robertson",
    16.0,
    49,
    3.9,
    "https://marketplace.canva.com/EAFczmjh0iw/2/0/1024w/canva-purple-and-dark-blue-illustrative-spring-day-wattpad-book-cover-bgALYz8Y6JE.jpg"
  ),
];

export default function TableRowItem() {
  return (
    <TableBody>
      {rows.map((row) => (
        <StyledTableRow key={row.name} sx={{}}>
          <StyledTableCell component="th" scope="row">
            <BookTitleCell>
              <Box
                sx={{
                  width: "30px",
                  height: "35px",
                  marginInlineEnd: "10px",
                }}
              >
                <Image src={row.cover} alt="Custom Logo" />
              </Box>
              <Typography sx={{ fontSize: "1.15em", fontWeight: "bold" }}>
                {row.name}
              </Typography>
            </BookTitleCell>
          </StyledTableCell>
          <StyledTableCell align="left">{row.calories}</StyledTableCell>
          <StyledTableCell align="left">{row.fat}</StyledTableCell>
          <StyledTableCell align="left">
            <Button
              color="primary"
              variant="contained"
              href="#"
              sx={{ color: "#fff", textTransform: "capitalize" }}
            >
              Buy
            </Button>
          </StyledTableCell>
          <StyledTableCell align="left">{row.protein}</StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
}
