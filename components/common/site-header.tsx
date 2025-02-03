"use client";

import React, { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sofa, Search, User, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CategoryNav } from "@/components/category-nav";
import { MobileNav } from "@/components/mobile-nav";
import { SearchDialog } from "@/components/search-dialog";
import { Cart } from "@/components/cart";

const mainNav = [
  { title: "Collections", href: "/collections" },
  { title: "Design Services", href: "/design-services" },
  { title: "Showrooms", href: "/showrooms" },
  { title: "Our Story", href: "/story" },
  { title: "Trade Program", href: "/trade" },
];

const SiteHeader = memo(() => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Top Bar */}
      <div className="hidden border-b border-stone-200 bg-stone-50 py-2 lg:block">
        <div className="container mx-auto flex max-w-screen-xl items-center justify-between px-4 md:px-8 text-sm text-stone-600">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-amber-700" />
              <span>Find a Showroom</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-amber-700" />
              <span>1-800-LUXURY</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/trade" className="hover:text-amber-700">
              Trade Program
            </Link>
            <Link href="/financing" className="hover:text-amber-700">
              Financing
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-stone-200">
        <div className="container mx-auto flex max-w-screen-xl h-16 md:h-20 items-center justify-between px-4 md:px-8">
          {/* Mobile Navigation */}
          <div className="flex items-center lg:hidden">
            <MobileNav />
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Sofa className="h-8 w-8 text-amber-700" />
            <span className="font-serif text-2xl font-medium">Redoak</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:space-x-8">
            {mainNav.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors hover:text-amber-700",
                    pathname === item.href ? "text-amber-700" : "text-stone-600"
                  )}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Search Button */}
            <SearchDialog>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-stone-100 hover:text-amber-700"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </SearchDialog>

            {/* Account Button */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-stone-100 hover:text-amber-700"
              asChild
            >
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>

            {/* Shopping Cart */}
            <Cart />
          </div>
        </div>
      </div>

      {/* Category Navigation (Responsive) */}
      <div className="container mx-auto max-w-screen-xl border-b border-stone-200 px-4 md:px-8">
        <CategoryNav />
      </div>
    </header>
  );
});

SiteHeader.displayName = "SiteHeader";

export default SiteHeader;
