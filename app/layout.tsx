import { Outfit, Open_Sans } from 'next/font/google';
import './globals.css';

import NavbarComponent from "./components/navbar";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${outfit.className} ${openSans.className} `}
      >
    
        <NavbarComponent />
        {children}

      </body>
    </html>
  );
}
