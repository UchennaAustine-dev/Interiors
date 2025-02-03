import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "K_T_P Interiors | Bespoke Design Experiences",
  description:
    "Transforming spaces through innovative design, exceptional craftsmanship, and visionary interior solutions.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-neutral-50 font-serif antialiased selection:bg-emerald-100 selection:text-emerald-900",
          playfairDisplay.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
