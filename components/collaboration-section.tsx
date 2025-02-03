"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Heart, Trophy } from "lucide-react";

const collaborations = [
  {
    icon: Building2,
    title: "Corporate Partnerships",
    description:
      "Innovative design solutions for modern workspaces and corporate environments.",
    href: "/collaborations/corporate",
  },
  {
    icon: Heart,
    title: "Design for Well-being",
    description:
      "Creating spaces that enhance mental health, productivity, and emotional comfort.",
    href: "/collaborations/well-being",
  },
  {
    icon: Trophy,
    title: "Award-Winning Concepts",
    description:
      "Recognized excellence in transformative design across residential and commercial sectors.",
    href: "/collaborations/awards",
  },
];

export const CollaborationSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-4">
            Our Design Collaborations
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Pioneering design partnerships that push boundaries, solve complex
            challenges, and create meaningful environments across diverse
            sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collaborations.map((collaboration, index) => (
            <motion.div
              key={collaboration.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="bg-neutral-50 rounded-2xl p-8 text-center group hover:shadow-lg transition-all"
            >
              <div className="mb-6 flex justify-center">
                <collaboration.icon className="h-12 w-12 text-emerald-700 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
                {collaboration.title}
              </h3>
              <p className="text-neutral-600 mb-6">
                {collaboration.description}
              </p>
              <Link
                href={collaboration.href}
                className="inline-flex items-center text-emerald-700 hover:text-emerald-900 transition-colors group"
              >
                Learn More
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="ml-2"
                >
                  →
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
