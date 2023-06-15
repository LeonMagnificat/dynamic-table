import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

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

export default function OtherBookItem() {
  return (
    <Box>
      <Box>
        <Box>
          <Box
            sx={{
              width: "120px",
              height: "150px",
              marginInlineEnd: "30px",
            }}
          >
            <Image src="https://marketplace.canva.com/EAFA7N_NLQs/1/0/1003w/canva-cute-colorful-watercolor-simple-illustrated-young-adult-romance-book-cover-ooKN90UU-H0.jpg" />
          </Box>
          <Box>
            <Typography>Title</Typography>
            <Typography>Title 02</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
