import type { Metadata } from "next";
import SideNav from "./SideNav";
import "./globles.css";
import Header from "./Header";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Elysium Reports",
  description: "Data Manager by Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideNav />
        <div style={{ width: "100%" }}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
