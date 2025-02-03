"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sofa, ArrowRight, Phone } from "lucide-react";

const HeroSection = memo(() => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 px-6 py-20 md:px-12 lg:py-24">
      {/* Textured Background */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl grid gap-12 md:grid-cols-2 items-center">
        {/* Left Content */}
        <motion.div
          className="flex flex-col justify-center space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-sm backdrop-blur-sm">
            <span className="text-amber-700 font-medium">
              Artisan Collection
            </span>
            <span className="text-stone-400">•</span>
            <span className="text-stone-600">Handcrafted Excellence</span>
          </div>

          {/* Heading */}
          <motion.h1
            className="text-4xl font-serif font-medium tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Where Luxury
            <br />
            Meets{" "}
            <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
              Comfort
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="max-w-[540px] text-lg text-stone-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transform your living spaces with our curated collection of bespoke
            furniture. Each piece tells a story of craftsmanship, designed to
            elevate your home’s aesthetic while providing unparalleled comfort.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="group bg-amber-700 hover:bg-amber-800 text-white"
            >
              <Sofa className="mr-2 h-5 w-5" />
              Browse Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-stone-300 bg-white/50 backdrop-blur-sm hover:bg-white"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="flex flex-wrap items-center space-x-6 md:space-x-12 pt-8 border-t border-stone-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center md:text-left">
              <div className="text-3xl font-serif text-amber-700">25+</div>
              <div className="text-stone-600">Years of Excellence</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-serif text-amber-700">100%</div>
              <div className="text-stone-600">Artisan Crafted</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative aspect-[4/5] w-full max-w-lg mx-auto md:max-w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-700/10 via-transparent to-transparent rounded-2xl" />
          <Image
            src="/furniture5.jpeg"
            alt="Luxurious living room featuring handcrafted furniture"
            fill
            className="object-cover rounded-2xl shadow-2xl"
            priority
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
