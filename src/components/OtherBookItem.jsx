import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const Image = styled("img")({
  height: "100%",
  minWidth: "100%",
  objectFit: "cover",
  borderRadius: "20px",
  transition: "ease .4s",
});
const OtherBook = styled(Box)({
  cursor: "pointer",
  "&:hover": {
    opacity: "90%",
    transform: "scale(1.0125)",
    transition: "ease .4s",
  },
});

export default function OtherBookItem({ otherBook }) {
  return (
    <OtherBook>
      <Box
        sx={{
          width: "120px",
          height: "150px",
          marginInlineEnd: "30px",
          border: "1px #d0d0d0 solid",
          borderRadius: "20px",
        }}
      >
        {otherBook &&
        otherBook.volumeInfo &&
        otherBook.volumeInfo.imageLinks &&
        otherBook.volumeInfo.imageLinks.thumbnail ? (
          <Image
            src={otherBook.volumeInfo.imageLinks.thumbnail}
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
      <Box sx={{ marginBlockStart: "20px" }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            width: "130px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {otherBook && otherBook.volumeInfo && otherBook.volumeInfo.title}
        </Typography>
        {otherBook && otherBook.volumeInfo && otherBook.volumeInfo.authors ? (
          otherBook.volumeInfo.authors.map((author, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: "13px",
                width: "130px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              -{author}
            </Typography>
          ))
        ) : (
          <Typography>---</Typography>
        )}
      </Box>
    </OtherBook>
  );
}
