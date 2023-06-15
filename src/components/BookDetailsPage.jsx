import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import OtherBookItem from "./OtherBookItem";

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
            <BookDetailsMainText>Nominated Books</BookDetailsMainText>
          </BookTextBox>
          <BookTextBox>
            <BookDetailsTitle>Author:</BookDetailsTitle>
            <BookDetailsMainText>Nominated Books</BookDetailsMainText>
          </BookTextBox>
          <BookTextBox>
            <BookDetailsTitle>Description:</BookDetailsTitle>
            <BookDetailsMainText>
              Set in the 1920s, 'The Great Gatsby' is a classic American novel
              that explores themes of wealth, love, and the pursuit of the
              American Dream. The story follows Jay Gatsby, a mysterious and
              wealthy man, and his infatuation with the beautiful and married
              Daisy Buchanan. Through the eyes of the narrator, Nick Carraway,
              we witness the extravagance and excess of the Jazz Age, as well as
              the disillusionment and moral decay that lie beneath the surface.
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
