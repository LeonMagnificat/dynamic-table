import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../logo.svg";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  borderRadius: "30px 30px 0 0",
  height: "70px",
  display: "flex",
  justifyContent: "center",
  borderBottom: "solid 1px #F1F2F6",
  marginBlockEnd: "15px",
}));

const LogoImage = styled("img")({
  height: 25,
  marginRight: 10,
});

const Search = styled("div")(({ theme }) => ({
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

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
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

export default function TopNavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <CustomAppBar position="static">
          <Toolbar>
            <Box
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,

                alignItems: "center",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <LogoImage src={Logo} alt="Custom Logo" />
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </CustomAppBar>
      </Box>
    </>
  );
}
