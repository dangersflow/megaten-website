import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "../components/layouts/MainLayout";
import { NextUIProvider } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import { darkTheme, lightTheme } from "../components/Themes";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(true);

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
