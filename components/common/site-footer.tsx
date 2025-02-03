"use client";

import Link from "next/link";
import { memo } from "react";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const navigation = {
  portfolio: [
    { name: "Residential", href: "/portfolio/residential" },
    { name: "Commercial", href: "/portfolio/commercial" },
    { name: "Hospitality", href: "/portfolio/hospitality" },
    { name: "Case Studies", href: "/portfolio/case-studies" },
  ],
  services: [
    { name: "Interior Design", href: "/services/interior-design" },
    { name: "Spatial Planning", href: "/services/spatial-planning" },
    { name: "Concept Development", href: "/services/concept" },
    { name: "Art Curation", href: "/services/art-curation" },
  ],
  resources: [
    { name: "Design Journal", href: "/journal" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Design Workshops", href: "/workshops" },
    { name: "Press", href: "/press" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
};

export const SiteFooter = memo(() => {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand Introduction */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Globe className="h-8 w-8 text-emerald-500" />
              <span className="font-serif text-2xl font-bold text-white">
                K_T_P
              </span>
            </Link>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Crafting extraordinary design narratives that transform spaces,
              elevate experiences, and reflect the unique essence of each
              client.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-neutral-400 hover:text-emerald-500 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {[
            { title: "Portfolio", items: navigation.portfolio },
            { title: "Services", items: navigation.services },
            { title: "Resources", items: navigation.resources },
          ].map(({ title, items }) => (
            <div key={title} className="space-y-6">
              <h3 className="font-serif text-lg font-semibold text-white">
                {title}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-neutral-300 text-sm hover:text-emerald-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold text-white">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-500" />
                  <span className="text-neutral-300">
                    456 Design Avenue
                    <br />
                    New York, NY 10012
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="tel:+12125551234"
                  className="flex items-center space-x-3 text-neutral-300 hover:text-emerald-500 transition-colors"
                >
                  <Phone className="h-5 w-5 text-emerald-500" />
                  <span>+1 (212) 555-1234</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@ktpinteriors.com"
                  className="flex items-center space-x-3 text-neutral-300 hover:text-emerald-500 transition-colors"
                >
                  <Mail className="h-5 w-5 text-emerald-500" />
                  <span>hello@ktpinteriors.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-12 pt-6 border-t border-neutral-800 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-400 text-sm hover:text-emerald-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-neutral-500 text-xs">
            &copy; {new Date().getFullYear()} K_T_P Interiors. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

SiteFooter.displayName = "SiteFooter";

export default SiteFooter;
