import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"] , weight : '400' });

export const metadata = {
  title: "Game List",
  description: "A personal game review site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <nav>nav bar</nav>
        {children}
        </body>
    </html>
  );
}
