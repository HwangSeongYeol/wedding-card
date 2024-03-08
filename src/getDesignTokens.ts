import { PaletteMode } from "@mui/material";
import { amber, deepPurple, grey, pink } from "@mui/material/colors";

export default (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: pink,
          secondary: deepPurple,
          divider: amber[200],
          background: {},
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: pink,
          secondary: deepPurple,
          background: {},
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
