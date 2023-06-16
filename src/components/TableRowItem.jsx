import * as React from "react";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Box, Typography, Button } from "@mui/material";
import { getBooks, saveBookId } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "none",
  color: "#404D61",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
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

const BookTitleCell = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const Image = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "cover",
  borderRadius: "10%",
});

export default function TableRowItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const booksCollection = useSelector((state) => state.books.books);
  console.log("booksCollection", booksCollection);

  const handleBookDetails = (bookId) => {
    const linkUrl = `/details/${bookId}`;
    navigate(linkUrl);
  };

  React.useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <TableBody>
      {booksCollection &&
        booksCollection.map((book) => {
          console.log(book.volumeInfo.imageLinks);
          return (
            <StyledTableRow
              key={book.id}
              onClick={() => {
                handleBookDetails(book.id);
                console.log(book.id);
              }}
            >
              <StyledTableCell component="th" scope="row">
                <BookTitleCell>
                  <Box
                    sx={{
                      minWidth: "30px",
                      height: "35px",
                      marginInlineEnd: "10px",
                    }}
                  >
                    {book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.thumbnail ? (
                      <Image
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt="Custom Logo"
                      />
                    ) : (
                      <Image
                        src={
                          "https://m.media-amazon.com/images/I/71qEsGzdLYL._AC_UF1000,1000_QL80_.jpg"
                        }
                        alt="Custom Logo"
                      />
                    )}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "1.1em",
                      fontWeight: "bold",
                      maxWidth: "300px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {book.volumeInfo.title}
                  </Typography>
                </BookTitleCell>
              </StyledTableCell>
              <StyledTableCell align="left">
                {book.volumeInfo.authors ? (
                  book.volumeInfo.authors.map((author) => {
                    return <Typography>{author}</Typography>;
                  })
                ) : (
                  <Typography>---</Typography>
                )}
              </StyledTableCell>
              {book.volumeInfo.publisher ? (
                <StyledTableCell align="left">
                  {book.volumeInfo.publisher}
                </StyledTableCell>
              ) : (
                <StyledTableCell align="left">---</StyledTableCell>
              )}

              <StyledTableCell align="left">
                {book.volumeInfo.publishedDate}
              </StyledTableCell>
              <StyledTableCell align="left">
                {book.volumeInfo.maturityRating}
              </StyledTableCell>
              <StyledTableCell align="left">
                <Button
                  color="primary"
                  variant="contained"
                  href={
                    book.saleInfo.buyLink
                      ? book.saleInfo.buyLink
                      : book.volumeInfo.previewLink
                  }
                  sx={{
                    color: "#fff",
                    textTransform: "capitalize",
                    boxShadow: "none",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          );
        })}
    </TableBody>
  );
}
