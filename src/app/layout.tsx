import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Earlington Legacy Initiative | Transforming Education",
  description: "Transforming Earlington Secondary School into a center of advanced learning and innovation. Bridging the digital divide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@300;400;600&family=Space+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-body antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
