"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8 grid md:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-serif font-bold text-neutral-900 leading-tight"
          >
            Transforming Spaces,
            <br />
            Crafting Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-neutral-600 text-lg max-w-xl"
          >
            Bespoke interior design solutions that blend innovation,
            functionality, and timeless elegance to create extraordinary living
            environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex space-x-4"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center px-6 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors group"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/consultations"
              className="inline-flex items-center px-6 py-3 border border-emerald-700 text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative aspect-[4/3]"
        >
          <div className="bg-emerald-100/50 absolute inset-0 rounded-2xl -rotate-6"></div>
          <div className="relative z-10">
            <Image
              src="/int1.jpeg"
              alt="Luxurious Interior Design"
              fill
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
