"use client";

import Link from "next/link";
import { Sofa, Lamp, Bed, Table, Flower, Home } from "lucide-react";

const categories = [
  {
    name: "Living Spaces",
    icon: Sofa,
    href: "/portfolio/living-spaces",
  },
  {
    name: "Lighting Design",
    icon: Lamp,
    href: "/portfolio/lighting",
  },
  {
    name: "Bedroom Designs",
    icon: Bed,
    href: "/portfolio/bedroom",
  },
  {
    name: "Dining Environments",
    icon: Table,
    href: "/portfolio/dining",
  },
  {
    name: "Green Spaces",
    icon: Flower,
    href: "/portfolio/green-design",
  },
  {
    name: "Home Styling",
    icon: Home,
    href: "/portfolio/styling",
  },
];

export const CategoryNav = () => {
  return (
    <nav className="py-8">
      <div className="flex justify-center space-x-4 md:space-x-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="flex flex-col items-center group space-y-2 text-neutral-600 hover:text-emerald-700 transition-colors"
          >
            <category.icon className="h-6 w-6 text-neutral-500 group-hover:text-emerald-700 transition-colors" />
            <span className="text-xs md:text-sm font-medium">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
