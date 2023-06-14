import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#50ADBB", // Replace with your desired primary color
    },
    secondary: {
      main: "#6c757d", // Replace with your desired secondary color
    },
  },
  typography: {
    fontFamily: "Nunito, Arial, sans-serif", // Specify Nunito as the preferred font
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
