import * as React from "react";
import { Typography, TableBody, Tooltip } from "@mui/material";
import { getBooks } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  StyledTableCell,
  StyledTableRow,
  BookTitleCell,
  ImageBox,
  Image,
  BookTitle,
  handleBookDetails,
  BuyButton,
} from "./Table-lib-style";
//import classNames from "classnames";

export default function TableRowItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const booksCollection = useSelector((state) => state.books.books);
  const [selectedRow, setSelectedRow] = React.useState(null);

  React.useEffect(() => {
    dispatch(getBooks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectedRow = (bookId) => {
    setSelectedRow(bookId);
  };

  return (
    <TableBody>
      {booksCollection &&
        booksCollection.map((book) => {
          return (
            <StyledTableRow
              key={book.id}
              onClick={() => {
                handleSelectedRow(book.id);
                // setTimeout(() => {
                //   handleBookDetails(book.id, navigate);
                // }, 2000);
              }}
              sx={{
                "&:nth-of-type(odd), &:nth-of-type(even)": {
                  backgroundColor: book.id === selectedRow ? "#DDFBFF" : "",
                },
              }}
              //className={classNames({ highlighted: book.id === selectedRow })}
            >
              <StyledTableCell component="th" scope="row">
                <BookTitleCell>
                  <ImageBox>
                    {book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.thumbnail ? (
                      <Image
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt="Book Image"
                      />
                    ) : (
                      <Image
                        src={
                          "https://m.media-amazon.com/images/I/71qEsGzdLYL._AC_UF1000,1000_QL80_.jpg"
                        }
                        alt="Book Image"
                      />
                    )}
                  </ImageBox>
                  <Tooltip title={book.volumeInfo.title} arrow>
                    <BookTitle>{book.volumeInfo.title}</BookTitle>
                  </Tooltip>
                </BookTitleCell>
              </StyledTableCell>
              <StyledTableCell align="left">
                {book.volumeInfo.authors ? (
                  book.volumeInfo.authors.map((author) => {
                    return (
                      <Typography sx={{ fontSize: "14px" }}>
                        {author}
                      </Typography>
                    );
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
                <BuyButton
                  color="primary"
                  variant="contained"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleBookDetails(book.id, navigate);
                  }}
                >
                  View Details
                </BuyButton>
              </StyledTableCell>
            </StyledTableRow>
          );
        })}
    </TableBody>
  );
}
