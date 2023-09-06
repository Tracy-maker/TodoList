import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";

// Define your custom font styles
const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif", 
    fontSize: 16, 
    h1: {
      fontFamily: "MyCustomFont, sans-serif", 
      fontSize: "2.5rem", 
    },
  
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
