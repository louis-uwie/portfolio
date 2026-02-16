import { Outfit, Open_Sans } from "next/font/google";
import "./globals.css";
import NavbarComponent from "./components/navbar";
import ThemeRegistry from "./theme";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${outfit.className} ${openSans.className}`}>
        <ThemeRegistry>
          <NavbarComponent />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
