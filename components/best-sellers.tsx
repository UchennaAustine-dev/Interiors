"use client";

import { TrendingUp } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types";

const bestsellers: Product[] = [
  {
    id: "1",
    name: "Milano Sectional Sofa",
    price: 4299.0,
    image: "/furniture1.jpeg",
    category: "sofas",
    rating: 4.9,
    reviews: 156,
    description: "Italian leather, modular design",
  },
  {
    id: "2",
    name: "Tuscany Dining Table",
    price: 2899.0,
    image: "/furniture2.jpeg",
    category: "dining",
    rating: 4.8,
    reviews: 124,
    description: "Solid walnut, seats 8",
  },
  {
    id: "3",
    name: "Venice Lounge Chair",
    price: 1899.0,
    image: "/furniture3.jpeg",
    category: "chairs",
    rating: 4.9,
    reviews: 98,
    description: "Premium velvet, brass accents",
  },
  {
    id: "4",
    name: "Florence Bed Frame",
    price: 3499.0,
    image: "/furniture4.jpeg",
    category: "bedroom",
    rating: 4.8,
    reviews: 112,
    description: "King size, upholstered headboard",
  },
];

export function Bestsellers() {
  return (
    <section className="bg-stone-50 py-20">
      <div className="container px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="mb-12 flex flex-wrap items-end justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-amber-700">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm font-medium">Most Popular</span>
            </div>
            <h2 className="font-serif text-3xl font-medium md:text-4xl">
              Bestselling Pieces
            </h2>
          </div>
          <span className="font-serif text-xl text-stone-400">2024</span>
        </motion.div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((product, index) => (
            <motion.div
              key={product.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl">
                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                  <div className="space-y-2 text-white">
                    <div className="text-sm font-medium text-amber-300">
                      In Stock
                    </div>
                    <div className="font-serif text-xl">{product.name}</div>
                    <div className="text-xl font-light">
                      ${product.price.toLocaleString()}
                    </div>
                    <span className="text-sm text-stone-300">
                      ({product.reviews} Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            variant="outline"
            className="border-amber-700 text-amber-700 hover:bg-amber-50"
          >
            View All Bestsellers
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
