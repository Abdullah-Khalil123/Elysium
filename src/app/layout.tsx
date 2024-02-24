import type { Metadata } from "next";
import SideNav from "./SideNav";
import "./globles.css";
import Header from "./Header";
import { Outfit } from "next/font/google";
import style from "./page.module.css";

const outfit = Outfit({
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
      <body className={outfit.className}>
        <SideNav />
        <div style={{ width: "100%" }}>
          <Header />
          <div className={style.ChildernHolder}>{children}</div>
        </div>
      </body>
    </html>
  );
}
