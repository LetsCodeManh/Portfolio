"use client";
import "../styles/globals.css";
import { Quicksand } from "@next/font/google";
import { ThemeProvider } from "next-themes";import Navigation from "@/components/Navigation";
const quicksand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={quicksand.className}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
