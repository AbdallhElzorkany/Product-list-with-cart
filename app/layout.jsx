import "./globals.css";
import { Red_Hat_Text } from "next/font/google";

const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
});

export const metadata = {
  title: "Desert Store",
  description: "desert store website built with nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${redHatText.variable}`}>
        {children}
      </body>
    </html>
  );
}
