import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "../src/components/layout/layout";

function MyApp({ Component, pageProps }) {
  // const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme();

  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };

  return (
    <ThemeProvider theme={theme}>
      {renderWithLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
