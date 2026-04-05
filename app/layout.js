import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

import Script from "next/script";

import "./globals.css";

export const metadata = {
  title: "Editorial Precision Dashboard",
  description: "High-end editorial project dashboard built with Next.js and Tailwind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var storedTheme = localStorage.getItem("theme");
              var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              var isDark = storedTheme ? storedTheme === "dark" : systemDark;
              document.documentElement.classList.toggle("dark", isDark);
            } catch (error) {}
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
