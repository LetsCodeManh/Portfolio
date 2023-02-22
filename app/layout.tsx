import Cursor from "@/components/reuse/Cursor";
import { Quicksand } from "@next/font/google";
import "../styles/globals.css";
import "../styles/styles.css";
import { Provider } from "./provider";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${quicksand.className} relative`}>
        <Provider>{children}</Provider>
        <Cursor />
      </body>
    </html>
  );
}
