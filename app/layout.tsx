import type { Metadata } from "next";
import "./globals.css";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Y hoy? | ¿Qué vas a tomar?",
  description: "app para saber que tomar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lilita.className}>{children}</body>
    </html>
  );
}
