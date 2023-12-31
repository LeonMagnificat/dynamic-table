import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import OtherBookItem from "./OtherBookItem";
import { useDispatch, useSelector } from "react-redux";
import { getBookById } from "../../redux/actions";
import { useParams } from "react-router-dom";
import {
  BookDetailsBox,
  BookTextBox,
  BookDetailsMainText,
  BookDetailsTitle,
  removeTags,
  ImageBox,
  Image,
  DetailTextContainer,
  LongBuyButton,
} from "./Details-lib-style";
//import classNames from "classnames";

export default function BookDetailsPage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const clickedBookData = useSelector((state) => state.books.clickedBook);
  const booksCollection = useSelector((state) => state.books.books);

  React.useEffect(() => {
    dispatch(getBookById(bookId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Box sx={{ marginBlock: "35px" }}>
        <Typography sx={{ fontSize: "1.3em" }}>
          {clickedBookData &&
            clickedBookData.volumeInfo &&
            clickedBookData.volumeInfo.title}
        </Typography>
      </Box>
      <BookDetailsBox
        sx={{
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        <ImageBox
          sx={{
            [theme.breakpoints.down("sm")]: {
              marginInlineEnd: "0px",
            },
          }}
        >
          {clickedBookData &&
          clickedBookData.volumeInfo &&
          clickedBookData.volumeInfo.imageLinks &&
          clickedBookData.volumeInfo.imageLinks.thumbnail ? (
            <Image
              src={clickedBookData.volumeInfo.imageLinks.thumbnail}
              alt="Book Cover "
            />
          ) : (
            <Image
              src={"https://wallpaperaccess.com/full/1227835.jpg"}
              alt="Custom Logo"
            />
          )}
        </ImageBox>
        <DetailTextContainer
          sx={{
            [theme.breakpoints.down("sm")]: {
              height: "25vh",
              marginBlockStart: "20px",
            },
          }}
        >
          <BookTextBox>
            <BookDetailsTitle>Book Title:</BookDetailsTitle>
            <BookDetailsMainText>
              {clickedBookData &&
                clickedBookData.volumeInfo &&
                clickedBookData.volumeInfo.title}
            </BookDetailsMainText>
          </BookTextBox>
          <BookTextBox>
            <BookDetailsTitle>Author:</BookDetailsTitle>
            {clickedBookData &&
            clickedBookData.volumeInfo &&
            clickedBookData.volumeInfo.authors ? (
              clickedBookData.volumeInfo.authors.map((author, index) => (
                <BookDetailsMainText key={index}>{author}</BookDetailsMainText>
              ))
            ) : (
              <Typography>---</Typography>
            )}
          </BookTextBox>
          <BookTextBox>
            <BookDetailsTitle>Description:</BookDetailsTitle>
            <BookDetailsMainText
              sx={{
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                },
              }}
              className="description"
            >
              {clickedBookData &&
              clickedBookData.volumeInfo &&
              clickedBookData.volumeInfo.description
                ? removeTags(clickedBookData.volumeInfo.description)
                : "No description available"}
            </BookDetailsMainText>
          </BookTextBox>

          <BookTextBox>
            <LongBuyButton
              color="primary"
              variant="contained"
              href=""
              sx={{
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                },
              }}
            >
              Buy
            </LongBuyButton>
            <LongBuyButton
              color="primary"
              //   variant="outlined"
              href="#"
              sx={{
                color: "#50ADBB",
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                },
              }}
            >
              Share
            </LongBuyButton>
          </BookTextBox>
        </DetailTextContainer>
      </BookDetailsBox>
      <Box>
        <Box sx={{ marginBlock: "30px" }}>
          <Typography sx={{ fontSize: "1.3em" }}>Other Books</Typography>
        </Box>
        <Box sx={{ display: "flex", overflowX: "auto" }}>
          {booksCollection &&
            booksCollection.map((otherBook) => {
              return <OtherBookItem otherBook={otherBook} />;
            })}
        </Box>
      </Box>
    </Box>
  );
}
