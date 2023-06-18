import { styled, alpha } from "@mui/material/styles";
import { AppBar, InputBase } from "@mui/material";

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  borderRadius: "30px 30px 0 0",
  height: "70px",
  display: "flex",
  justifyContent: "center",
  borderBottom: "solid 1px #F1F2F6",
  marginBlockEnd: "15px",
}));

export const LogoImage = styled("img")({
  height: 25,
  marginRight: 10,
});

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  borderRadius: "20px",
  transition: "ease .5s",
  "&:hover": {
    backgroundColor: "#F5FEFF",
    transition: "ease .5s",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 2, 2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "60ch",
      },
    },
  },
}));
