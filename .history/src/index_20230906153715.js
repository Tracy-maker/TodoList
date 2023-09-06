import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";

// Define your custom font styles
const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif", // Default font family
    fontSize: 16, // Default font size
    h1: {
      fontFamily: "MyCustomFont, sans-serif", // Custom font for h1
      fontSize: "2.5rem", // Custom font size for h1
    },
    // Define custom typography styles for other elements as needed
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
