/* eslint-disable @next/next/no-head-element */
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
// import React, {useState} from 'react';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // const [navActive, setNavActive] = useState<navActive | null>(null);
  // const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <>
      <Head>
        <title>Adminpro</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <main>
          
        </main>
      </ThemeProvider>
    </>
  );
}