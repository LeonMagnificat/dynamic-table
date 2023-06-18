import {
  Box,
  Typography,
  Button,
  styled,
  TableRow,
  TableContainer,
  TableCell,
  tableCellClasses,
  Container,
} from "@mui/material";

//---Styles
//---TableRowItem----

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "none",
  color: "#404D61",
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#fafafa;",
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

export const BookTitleCell = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const ImageBox = styled(Box)({
  minWidth: "30px",
  height: "35px",
  marginInlineEnd: "10px",
  border: "1px #d0d0d0 solid",
});
export const Image = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "cover",
  borderRadius: "10%",
});
export const BookTitle = styled(Typography)({
  fontSize: "1.1em",
  fontWeight: "bold",
  maxWidth: "300px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
export const BuyButton = styled(Button)({
  color: "#fff",
  textTransform: "capitalize",
  boxShadow: "none",
});

//---functions

export const handleBookDetails = (bookId, navigate) => {
  const linkUrl = `/details/${bookId}`;
  navigate(linkUrl);
};

//--TableData

export const CustomTableCell = styled(TableCell)(({ theme }) => ({
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

export const StyledTableContainer = styled(TableContainer)({
  boxShadow: "none",
  maxHeight: "calc(85vh - 150px)",
  overflow: "auto",
});

//--Main Frame

export const MainBox = styled(Box)({
  backgroundColor: "#fff",
  width: "95%",
  borderRadius: "30px",
  boxShadow: "0px 4px 50px 0px rgba(66, 68, 90, 0.11)",
  paddingInline: "30px",
});

export const MainBoxContainer = styled(Container)({
  padding: "30px",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
});
