"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { Autocomplete } from "@/components/ui/autocomplete";

const searchOptions = [
  { label: "Winter Collection", value: "/shop/winter" },
  { label: "New Arrivals", value: "/shop/new-arrivals" },
  { label: "Best Sellers", value: "/shop/best-sellers" },
  { label: "Men", value: "/shop/men" },
  { label: "Women", value: "/shop/women" },
  { label: "Unisex", value: "/shop/unisex" },
];

export function Search() {
  const router = useRouter();

  const handleSelect = (value: string) => {
    router.push(value);
  };

  return (
    <div className="relative w-full sm:w-[300px]">
      <Autocomplete
        options={searchOptions}
        placeholder="Search products..."
        onSelect={handleSelect}
      />
      <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </div>
  );
}
