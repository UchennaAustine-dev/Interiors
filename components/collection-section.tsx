"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    name: "Modern Minimalist",
    description: "Clean lines and functional elegance",
    image: "/int2.jpeg",
    href: "/collections/modern-minimalist",
  },
  {
    name: "Organic Luxe",
    description: "Natural materials, sophisticated textures",
    image: "/int3.jpeg",
    href: "/collections/organic-luxe",
  },
  {
    name: "Urban Eclectic",
    description: "Bold statements, curated compositions",
    image: "/int4.jpeg",
    href: "/collections/urban-eclectic",
  },
];

export const CollectionSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-4">
            Our Design Collections
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore meticulously curated design narratives that transform spaces
            and reflect individual lifestyle and aesthetic preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-2">
                  {collection.name}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {collection.description}
                </p>
                <Link
                  href={collection.href}
                  className="inline-flex items-center text-emerald-700 hover:text-emerald-900 transition-colors group"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
