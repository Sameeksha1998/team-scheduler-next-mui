import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0B84FF" },
    secondary: { main: "#00A3FF" },
    background: { default: "#FFFFFF", paper: "#FFFFFF" },
    text: { primary: "#1E2A38", secondary: "#6B7380" }
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: ["Inter", "Roboto", "Arial", "sans-serif"].join(","),
    h6: { fontWeight: 700 },
    subtitle1: { fontWeight: 600 },
    body2: { color: "#2E3A46" }
  },
  spacing: 8,
  components: {
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 8 } }
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", borderRadius: 8 }
      }
    }
  }
});

theme = responsiveFontSizes(theme);
export default theme;
