import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

interface Props {
  children?: ReactNode;
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        <title>Medipedia</title>
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
