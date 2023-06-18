import * as React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBookById } from "../../redux/actions";
import {
  OtherBook,
  OtherImageBox,
  OtherBookText,
  Image,
} from "./Details-lib-style";
import { handleBookDetails } from "../Home-table/Table-lib-style";

export default function OtherBookItem({ otherBook }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <OtherBook
      onClick={() => {
        handleBookDetails(otherBook.id, navigate);
        dispatch(getBookById(otherBook.id));
      }}
    >
      <OtherImageBox>
        {otherBook &&
        otherBook.volumeInfo &&
        otherBook.volumeInfo.imageLinks &&
        otherBook.volumeInfo.imageLinks.thumbnail ? (
          <Image
            src={otherBook.volumeInfo.imageLinks.thumbnail}
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
      </OtherImageBox>
      <Box sx={{ marginBlockStart: "20px" }}>
        <OtherBookText
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {otherBook && otherBook.volumeInfo && otherBook.volumeInfo.title}
        </OtherBookText>
        {otherBook && otherBook.volumeInfo && otherBook.volumeInfo.authors ? (
          otherBook.volumeInfo.authors.map((author, index) => (
            <Tooltip title={`${otherBook.volumeInfo.title} - ${author}`}>
              <OtherBookText
                key={index}
                sx={{
                  fontSize: "13px",
                }}
              >
                - {author}
              </OtherBookText>
            </Tooltip>
          ))
        ) : (
          <Typography>---</Typography>
        )}
      </Box>
    </OtherBook>
  );
}
