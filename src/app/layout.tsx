import type { Metadata } from "next";
import SideNav from "./SideNav/page";
import "./globles.css";

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
      <body>
        <SideNav />
        {children}
      </body>
    </html>
  );
}
