import { styled } from "@mui/material/styles";
import { Box, Typography, Button, Container } from "@mui/material";

export const BookDetailsBox = styled(Box)({
  display: "flex",
});
export const ImageBox = styled(Box)({
  //   maxWidth: "220px",
  height: "348px",
  marginInlineEnd: "30px",
  border: "1px #d0d0d0 solid",
  borderRadius: "20px",
});
export const Image = styled("img")({
  height: "100%",
  minWidth: "100%",
  objectFit: "cover",
  borderRadius: "20px",
  transition: "ease .4s",
});
export const LongBuyButton = styled(Button)({
  color: "#fff",
  textTransform: "capitalize",
  width: "150px",
  height: "50px",
  boxShadow: "none",
  marginInlineEnd: "10px",
});

export const BookTextBox = styled(Box)({
  // marginBlockEnd: "20px",
});
export const DetailTextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
export const BookDetailsTitle = styled(Typography)({
  fontSize: ".9em",
  color: "#404D61",
});
export const BookDetailsMainText = styled(Typography)({
  fontSize: "1em",
  fontWeight: "bold",
  color: "#404D61",
  width: "70%",
  maxHeight: "90px",
  overflow: "auto",
});

export const removeTags = (html) => {
  const sampleElement = document.createElement("div");
  sampleElement.innerHTML = html;
  return sampleElement.textContent || sampleElement.innerText || "";
};

//---BooDetails

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

//---OtherBookItem

export const OtherBook = styled(Box)({
  cursor: "pointer",
  "&:hover": {
    opacity: "90%",
    transform: "scale(1.0125)",
    transition: "ease .4s",
  },
});

export const OtherImageBox = styled(Box)({
  width: "120px",
  height: "150px",
  marginInlineEnd: "30px",
  border: "1px #d0d0d0 solid",
  borderRadius: "20px",
});
export const OtherBookText = styled(Box)({
  width: "130px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
