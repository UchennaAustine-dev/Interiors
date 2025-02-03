"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Armchair,
  BookOpen,
  Crown,
  Home,
  Lamp,
  Star,
  Truck,
} from "lucide-react";

const categories = [
  {
    title: "Collections",
    href: "/collections",
    icon: Crown,
    description: "Curated furniture sets",
  },
  {
    title: "Living Room",
    href: "/living-room",
    icon: Armchair,
    description: "Sofas & seating",
  },
  {
    title: "Bedroom",
    href: "/bedroom",
    icon: Home,
    description: "Rest & relaxation",
  },
  {
    title: "Lighting",
    href: "/lighting",
    icon: Lamp,
    description: "Designer fixtures",
  },
  {
    title: "New Arrivals",
    href: "/new-arrivals",
    icon: Star,
    description: "Latest additions",
  },
  {
    title: "Catalog",
    href: "/catalog",
    icon: BookOpen,
    description: "View all pieces",
  },
  {
    title: "Quick Ship",
    href: "/quick-ship",
    icon: Truck,
    description: "Ready to deliver",
  },
];

export function CategoryNav() {
  const pathname = usePathname();

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-xl border border-stone-200 bg-white/80 backdrop-blur-sm">
      <div className="flex w-max space-x-2 p-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={category.href}
                className={cn(
                  "group relative flex flex-col items-center rounded-lg px-6 py-3 text-sm transition-colors",
                  pathname === category.href
                    ? "bg-amber-50 text-amber-900"
                    : "text-stone-600 hover:bg-stone-50 hover:text-amber-700"
                )}
              >
                <Icon
                  className={cn(
                    "mb-1 h-5 w-5 transition-colors",
                    pathname === category.href
                      ? "text-amber-700"
                      : "text-stone-400 group-hover:text-amber-600"
                  )}
                />
                <span className="font-medium">{category.title}</span>
                <span className="mt-1 text-xs text-stone-500">
                  {category.description}
                </span>
                {pathname === category.href && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-amber-700"
                    layoutId="activeCategory"
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
}
