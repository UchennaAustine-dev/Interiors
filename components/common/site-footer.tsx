"use client";

import Link from "next/link";
import { memo } from "react";
import { Sofa, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const navigation = {
  collections: [
    { name: "Living Room", href: "/collections/living-room" },
    { name: "Dining Room", href: "/collections/dining-room" },
    { name: "Bedroom", href: "/collections/bedroom" },
    { name: "Lighting", href: "/collections/lighting" },
  ],
  services: [
    { name: "Design Services", href: "/services/design" },
    { name: "Trade Program", href: "/trade" },
    { name: "Financing", href: "/financing" },
    { name: "White Glove Delivery", href: "/delivery" },
  ],
  company: [
    { name: "Our Story", href: "/story" },
    { name: "Showrooms", href: "/showrooms" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export const SiteFooter = memo(() => {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="container mx-auto max-w-screen-xl py-12 px-4 md:px-8">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Sofa className="h-8 w-8 text-amber-700" />
              <span className="font-serif text-2xl">Redoak</span>
            </Link>
            <p className="text-stone-600 max-w-xs text-sm">
              Crafting exceptional living spaces through timeless design and
              unparalleled craftsmanship since 1992.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-stone-400 hover:text-amber-700" />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-stone-400 hover:text-amber-700" />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg">Collections</h3>
            <ul className="space-y-3 text-sm">
              {navigation.collections.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-stone-600 hover:text-amber-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg">Services</h3>
            <ul className="space-y-3 text-sm">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-stone-600 hover:text-amber-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-amber-700" />
                  <span className="text-stone-600">
                    123 Madison Avenue
                    <br />
                    New York, NY 10001
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="tel:+18001234567"
                  className="flex items-center space-x-2 text-stone-600 hover:text-amber-700"
                >
                  <Phone className="h-5 w-5 text-amber-700" />
                  <span>1-800-LUXURY</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@maison.com"
                  className="flex items-center space-x-2 text-stone-600 hover:text-amber-700"
                >
                  <Mail className="h-5 w-5 text-amber-700" />
                  <span>contact@redoak.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="mt-12 border-t border-stone-200 pt-6 text-center text-sm text-stone-500">
          <div className="flex flex-col items-center space-y-3 md:flex-row md:justify-center md:space-x-6 md:space-y-0">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-amber-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} Redoak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

SiteFooter.displayName = "SiteFooter";

export default SiteFooter;
