import { PaletteMode } from "@mui/material";

export default (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#FEDBD0",
            dark: "#442C2E",
          },
          secondary: {
            main: "#FEEAE6",
          },
          error: {
            main: "#FFDC84",
          },
          background: {
            default: "#fffbfa",
            paper: "#FDF5F5",
            card: "white",
          },
          text: {
            primary: "#442c2e",
            secondary: "#885A5A",
          },
        }
      : {
          primary: {
            main: "#FEDBD0",
            dark: "#442C2E",
          },
          secondary: {
            main: "#FEEAE6",
          },
          error: {
            main: "#FFDC84",
          },
          background: {
            default: "#3E2723",
            paper: "#463E3A",
          },
          text: {
            primary: "#ffffff",
            secondary: "#D7CCC8",
          },
        }),
  },
});
