import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
