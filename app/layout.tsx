import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./providers/Provider";
import Header from "./components/layout/Header";
import { cn } from "@/lib/utils";
import Sidebar from "./components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlayGround App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
        )}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
