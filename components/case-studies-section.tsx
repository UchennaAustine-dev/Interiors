"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { responsiveStyles } from "@/lib/utils";
import Image from "next/image";

const caseStudies = [
  {
    title: "Corporate Workspace Transformation",
    client: "Tech Innovation Hub",
    description:
      "Redesigning a collaborative environment that enhances creativity and productivity.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjN8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBzcGFjZXxlbnwwfHx8fDE3MDk0NjQwMDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    href: "/case-studies/tech-innovation-hub",
  },
  {
    title: "Luxury Residential Redesign",
    client: "Urban Penthouse",
    description:
      "Creating a sophisticated living space that balances modern aesthetics with personal comfort.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjN8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBlbnRob3VzZSUyMGludGVyaW9yfGVufDB8fHx8MTcwOTQ2NDAzM3ww&ixlib=rb-4.0.3&q=80&w=1080",
    href: "/case-studies/urban-penthouse",
  },
  {
    title: "Hospitality Design Excellence",
    client: "Boutique Hotel Concept",
    description:
      "Developing a unique hospitality experience through innovative interior design strategies.",
    image:
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjN8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwbG9iYnl8ZW58MHx8fHwxNzA5NDY0MDU4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    href: "/case-studies/boutique-hotel",
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className={`${responsiveStyles.spacing.section}`}>
      <div className={responsiveStyles.container}>
        <div className="text-center mb-12">
          <h2
            className={`font-serif font-bold text-neutral-900 ${responsiveStyles.typography.heading}`}
          >
            Design Case Studies
          </h2>
          <p
            className={`text-neutral-600 max-w-2xl mx-auto mt-4 ${responsiveStyles.typography.body}`}
          >
            Explore our most impactful design transformations across diverse
            sectors.
          </p>
        </div>

        <div className={responsiveStyles.gridLayout}>
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl mb-6">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={500} // Add width
                  height={300} // Add height
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                  {study.title}
                </h3>
                <p
                  className={`text-neutral-600 mb-4 ${responsiveStyles.typography.body}`}
                >
                  {study.description}
                </p>
                <Link
                  href={study.href}
                  className="inline-flex items-center text-emerald-700 hover:text-emerald-900 group"
                >
                  View Case Study
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
