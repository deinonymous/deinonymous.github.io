import { colors, createTheme, SimplePaletteColorOptions } from "@mui/material";
import chroma from "chroma-js";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.teal[200],
      dark: colors.teal[400],
      light: colors.teal[100],
    },
    secondary: {
      main: colors.red[200],
      dark: colors.red[400],
      light: colors.red[100],
    },
    text: {
      primary: chroma.average([colors.red[900], colors.common.black]).hex(),
      secondary: chroma.average([colors.teal[900], colors.common.black]).hex(),
      disabled: colors.grey[500],
    },
  },
  typography: {
    fontFamily: "Monaspace Argon",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: `
          width: 100vw,
          height: 100vh !important,
          @font-face {
            font-family: "Monaspace Argon";
            src: url('MonaspaceArgon-Regular.otf');
          }
        `,
        body: {
          margin: 0,
          fontFamily: "Monaspace Argon",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "0 !important",
          padding: "0 !important",
          margin: 0,
          fontSize: "14px",
          verticalAlign: "top",
        },
      },
    },
  },
});

export const fancyGradient = (
  colorOption: keyof SimplePaletteColorOptions = "main",
  deg: number = 90
) =>
  `linear-gradient(
    ${deg}deg, ${theme.palette.primary[colorOption]} 0%,
    ${theme.palette.secondary[colorOption]} 100%
  )`;

export default theme;
