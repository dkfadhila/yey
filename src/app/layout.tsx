import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "UNY Grade Checker",
  description: "Cek nilai Komputasi Fisika 2025",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gradient-to-tr from-gradient-start to-gradient-end text-white">
        {children}
      </body>
    </html>
  );
}
