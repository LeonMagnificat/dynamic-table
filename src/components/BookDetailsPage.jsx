import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import OtherBookItem from "./OtherBookItem";
import { useDispatch, useSelector } from "react-redux";
import { getBookById } from "../redux/actions";
import { useParams } from "react-router-dom";

const BookDetailsBox = styled(Box)({
  display: "flex",
});
const Image = styled("img")({
  height: "100%",
  minWidth: "100%",
  objectFit: "cover",
  borderRadius: "20px",
});

const BookTextBox = styled(Box)({
  marginBlockEnd: "20px",
});
const BookDetailsTitle = styled(Typography)({
  fontSize: ".9em",
  color: "#404D61",
});
const BookDetailsMainText = styled(Typography)({
  fontSize: "1.3em",
  fontWeight: "bold",
  color: "#404D61",
  width: "60%",
});

export default function BookDetailsPage() {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const clickedBookData = useSelector((state) => state.books.clickedBook);

  React.useEffect(() => {
    dispatch(getBookById(bookId));
    console.log("bookId", bookId);
  }, []);

  const removeTags = (html) => {
    const sampleElement = document.createElement("div");
    sampleElement.innerHTML = html;
    return sampleElement.textContent || sampleElement.innerText || "";
  };

  console.log("clickedBookDataaaaaa", clickedBookData);
  return (
    <Box>
      <Box sx={{ marginBlock: "15px" }}>
        <Typography sx={{ fontSize: "2em" }}>Nominated Books</Typography>
      </Box>
      <BookDetailsBox>
        <Box
          sx={{
            width: "320px",
            height: "430px",
            marginInlineEnd: "30px",
          }}
        >
          <Image src="https://marketplace.canva.com/EAFA7N_NLQs/1/0/1003w/canva-cute-colorful-watercolor-simple-illustrated-young-adult-romance-book-cover-ooKN90UU-H0.jpg" />
        </Box>
        <Box>
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
            <BookDetailsMainText>
              {clickedBookData &&
              clickedBookData.volumeInfo &&
              clickedBookData.volumeInfo.description
                ? removeTags(clickedBookData.volumeInfo.description)
                : "No description available"}
            </BookDetailsMainText>
          </BookTextBox>

          <BookTextBox>
            <Button
              color="primary"
              variant="contained"
              href="#"
              sx={{
                color: "#fff",
                textTransform: "capitalize",
                width: "150px",
                height: "50px",
                boxShadow: "none",
                marginInlineEnd: "15px",
              }}
              onClick={() => {}}
            >
              Buy
            </Button>
            <Button
              color="primary"
              //   variant="outlined"
              href="#"
              sx={{
                color: "#50ADBB",
                textTransform: "capitalize",
                width: "150px",
                height: "50px",
                boxShadow: "none",
              }}
            >
              Share
            </Button>
          </BookTextBox>
        </Box>
      </BookDetailsBox>
      <Box>
        <Box sx={{ marginBlock: "30px" }}>
          <Typography sx={{ fontSize: "2em" }}>Other Books</Typography>
        </Box>
        <Box sx={{ display: "flex", overflowX: "auto" }}>
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
          <OtherBookItem />
        </Box>
      </Box>
    </Box>
  );
}
