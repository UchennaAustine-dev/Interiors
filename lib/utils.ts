import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const responsiveStyles = {
  container: "px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",
  gridLayout: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
  typography: {
    heading: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    body: "text-sm sm:text-base md:text-lg",
    caption: "text-xs sm:text-sm",
  },
  spacing: {
    section: "py-8 sm:py-12 md:py-16 lg:py-20",
    gap: "space-y-4 sm:space-y-6 md:space-y-8",
  },
};
