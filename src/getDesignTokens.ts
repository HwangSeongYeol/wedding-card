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
            main: "#D00036",
          },
          background: {
            default: "#fffbfa",
            paper: "#fffbfa",
          },
          text: {
            primary: "#442c2e",
            secondary: "grey[800]",
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
            main: "#D00036",
          },
          background: {
            default: "#3E2723",
            paper: "#4E342E",
          },
          text: {
            primary: "#ffffff",
            secondary: "#D7CCC8",
          },
        }),
  },
});
