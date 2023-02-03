import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "../src/theme";
import { Toaster } from "react-hot-toast";
import "../src/language/i18n";
import Layout from "../src/components/layout/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  SettingsConsumer,
  SettingsProvider,
} from "../src/contexts/settings-context";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default MyApp;
