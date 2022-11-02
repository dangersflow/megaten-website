// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";

// 2. Call `createTheme` and pass your custom values
export const lightTheme = createTheme({
  type: "light",
});

export const darkTheme = createTheme({
  type: "dark",
});
