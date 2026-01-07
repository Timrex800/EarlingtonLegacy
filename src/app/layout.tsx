import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Earlington Legacy Initiative | Official NPC Site",
  description: "Transforming Earlington Secondary School into a center of advanced learning and innovation. Bridging the digital divide via https://www.earlingtonlegacy.org.za/",
  verification: {
    google: "2fq0gBV2QLpvhVLUPulFLCIG0Un2CjO2pKPR7vP7mTM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MJHTWL9F');`,
          }}
        />
        <link rel="canonical" href="https://www.earlingtonlegacy.org.za/" />
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
