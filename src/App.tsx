"use client";

import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./lib/store"; // Your Redux store
// import { ThemeProvider } from "@/components/theme-provider"; // optional

interface AppProps {
  children: ReactNode;
}

export default function App({ children }: AppProps) {
  return (
    <ReduxProvider store={store}>
      {/* <ThemeProvider> */}
      {children}
      {/* </ThemeProvider> */}
    </ReduxProvider>
  );
}
