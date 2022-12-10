import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";

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
      <div className="bg-[#eaf4fa] dark:bg-[#202020] ">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </>
  );
}

export default MyApp;
