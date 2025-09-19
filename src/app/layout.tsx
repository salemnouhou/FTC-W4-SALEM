import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "700"], 
 
});

export const metadata: Metadata = {
  title: "The French Tototte — Landing Page Design",
  description: "The French Tototte — Landing Page Design",
  // icons: {
  //   icon: '/favicon-browser.png',
  //   apple: '/favicon-browser.png',
  // },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${jakarta.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
