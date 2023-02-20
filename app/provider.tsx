"use client";
import { ThemeProvider } from "next-themes";

export function Provider({ children }: any) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}
