import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import Layout from "../src/components/layout/layout";
import {
  SettingsConsumer,
  SettingsProvider,
} from "../src/contexts/settings-context";

function MyApp({ Component, pageProps }) {
  // const getLayout = Component.getLayout ?? ((page) => page);

  // const theme = createTheme();

  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };

  return (
    <SettingsProvider>
      <SettingsConsumer>
        {(value) => (
          <ThemeProvider
            theme={createTheme({
              direction: value?.settings?.direction,
              responsiveFontSizes: value?.settings?.responsiveFontSizes,
              mode: value?.settings?.theme,
            })}
          >
            <Toaster position="top-center" />
            {renderWithLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        )}
      </SettingsConsumer>
    </SettingsProvider>
  );
}

export default MyApp;
