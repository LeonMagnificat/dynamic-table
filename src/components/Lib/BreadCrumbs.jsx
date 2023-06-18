import React from "react";
import { Breadcrumbs } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import {
  StyledRouterLink,
  BreadcrumbItem,
  capitalizeFirstLetter,
} from "./BreadCrumbsLib";

export default function BreadCrumbs() {
  const location = useLocation();
  const clickedBookData = useSelector((state) => state.books.clickedBook);
  const pathnames = location.pathname.split("/").filter((x) => x);

  const handleClick = (event) => {
    event.preventDefault();
  };

  const isDetailsPage = location.pathname.startsWith("/details/");

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs separator="|" aria-label="breadcrumb">
        <StyledRouterLink underline="none" to="/">
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
