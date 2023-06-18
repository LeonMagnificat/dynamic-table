import * as React from "react";
import { Box, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../logo.svg";
import {
  CustomAppBar,
  LogoImage,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./TopNavBar-style";

export default function TopNavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <CustomAppBar position="static">
          <Toolbar>
            <Box
              variant="h6"
              noWrap
              component="a"
              href="/"
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
