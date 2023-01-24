/* eslint-disable @next/next/no-head-element */
'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, {useState} from 'react';
import Logo from "../public/APAssets/APunderline.png";
import './globals.css';
import NavItem from '../comp/NavItem';

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

  const [navActive, setNavActive] = useState<navActive | null>(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <html>
      <body>
        <main>
          <nav className={`nav`}>
              <Link href={"/"}>
                  <h1 className="logo">LOF</h1>
              </Link>
              <div
                onClick={() => setNavActive(!navActive)}
                className={`nav__menu-bar`}
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                {MENU_LIST.map((menu, idx) => (
                  <div
                    onClick={() => {
                      setActiveIdx(idx);
                      setNavActive(false);
                    }}
                    key={menu.text}
                  >
                    <NavItem active={activeIdx === idx} {...menu} />
                  </div>
                ))}
              </div>
            </nav>
          {children}
        </main>
      </body>
    </html>
  );
}