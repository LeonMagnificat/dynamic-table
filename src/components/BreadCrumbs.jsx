import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link, styled } from "@mui/material";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";

const StyledRouterLink = styled(RouterLink)({
  color: "inherit",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
});

const BreadcrumbItem = ({ label, url, isLast, isDetailsPage }) => {
  if (isDetailsPage) {
    return (
      <Typography sx={{ color: "green" }} key={url}>
        {label}
      </Typography>
    );
  }

  return null;
};

export default function BreadCrumbs() {
  const location = useLocation();
  const clickedBookData = useSelector((state) => state.books.clickedBook);
  const pathnames = location.pathname.split("/").filter((x) => x);

  const handleClick = (event) => {
    event.preventDefault();
  };

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const isBooksPage = location.pathname === "/books";
  const isDetailsPage = location.pathname.startsWith("/details/");

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs separator="|" aria-label="breadcrumb">
        <StyledRouterLink underline="none" to="/books">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Books
        </StyledRouterLink>

        {pathnames.map((pathname, index) => {
          const url = `/${pathnames.slice(0, index + 1).join("/")}`;
          console.log("URL", url);
          const label = capitalizeFirstLetter(pathname);
          const isLast = index === pathnames.length - 1;

          return (
            <BreadcrumbItem
              key={clickedBookData?.id}
              label={
                isDetailsPage && isLast
                  ? clickedBookData?.volumeInfo?.title
                  : label
              }
              url={url}
              isLast={isLast}
              isDetailsPage={isDetailsPage}
            />
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
