import { styled, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const StyledRouterLink = styled(RouterLink)({
  color: "inherit",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
});

export const BreadcrumbItem = ({ label, url, isLast, isDetailsPage }) => {
  if (isDetailsPage) {
    return (
      <Typography sx={{ color: "#50ADBB" }} key={url}>
        {label}
      </Typography>
    );
  }

  return null;
};

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
