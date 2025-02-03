import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "REDOAK - Fashion for All, Every Day",
  description:
    "Discover your personal style and make a statement with every furniture.",
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
          outfit.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
