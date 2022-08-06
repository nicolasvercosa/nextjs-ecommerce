import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import theme from "./theme";

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      background: string;
      primary: string;
      border: string;
    };
  }

  interface ThemeOptions {
    colors: {
      background: string;
      primary: string;
      border: string;
    };
  }
}

 