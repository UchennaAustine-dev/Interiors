"use client";

import React, { memo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, User, Globe, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const mainNav = [
  {
    title: "Portfolio",
    href: "/portfolio",
    icon: <Globe size={20} />,
    description: "Explore our design masterpieces",
  },
  {
    title: "Services",
    href: "/services",
    icon: <FileText size={20} />,
    description: "Comprehensive interior design solutions",
  },
  {
    title: "Approach",
    href: "/approach",
    icon: <User size={20} />,
    description: "Our unique design philosophy",
  },
  {
    title: "Consultations",
    href: "/consultations",
    icon: <Globe size={20} />,
    description: "Book personalized design sessions",
  },
  {
    title: "Journal",
    href: "/journal",
    icon: <FileText size={20} />,
    description: "Design insights and inspiration",
  },
];

const SiteHeader = memo(() => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 hover:text-primary transition-colors"
        >
          K_T_P Interiors
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary"
              )}
            >
              {item.title}
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform group-hover:scale-x-100",
                  pathname === item.href ? "scale-x-100" : ""
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:flex hidden"
            aria-label="Search"
          >
            <Search size={20} />
          </Button>

          <Button variant="outline" className="hidden md:inline-flex">
            Book Consultation
          </Button>

          <Button variant="secondary" className="hidden md:inline-flex">
            <User size={16} className="mr-2" /> Account
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              className="absolute right-0 top-0 w-64 h-full bg-white shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-4">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-md transition-colors",
                      pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-gray-100"
                    )}
                  >
                    {item.icon}
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <p className="text-xs text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={closeMobileMenu}
                >
                  <Search size={16} className="mr-2" /> Search
                </Button>
                <Button variant="default" className="w-full">
                  Book Consultation
                </Button>
                <Button variant="secondary" className="w-full">
                  <User size={16} className="mr-2" /> Account
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

SiteHeader.displayName = "SiteHeader";

export default SiteHeader;
