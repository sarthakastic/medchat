import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface Props {
  children?: ReactNode;
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
