import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

import { ThemeInitializer } from "@/components/ui/theme-initializer";

import "./globals.css";

export const metadata = {
  title: "Editorial Precision Dashboard",
  description: "High-end editorial project dashboard built with Next.js and Tailwind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeInitializer />
        {children}
      </body>
    </html>
  );
}
