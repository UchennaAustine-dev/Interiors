"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types";

const products: Product[] = [
  {
    id: "1",
    name: "Bordeaux Leather Sofa",
    price: 3499.0,
    image: "/furniture5.jpeg",
    category: "sofas",
    rating: 4.9,
    reviews: 127,
    description: "Hand-crafted Italian leather, solid oak frame",
  },
  {
    id: "2",
    name: "Monaco Dining Set",
    price: 4299.0,
    image: "/furniture6.jpeg",
    category: "dining",
    rating: 4.8,
    reviews: 94,
    description: "Walnut finish, 6 upholstered chairs included",
  },
  {
    id: "3",
    name: "Vienna Accent Chair",
    price: 1299.0,
    image: "/furniture7.jpeg",
    category: "chairs",
    rating: 4.7,
    reviews: 156,
    description: "Velvet upholstery, brass-finished frame",
  },
  {
    id: "4",
    name: "Artisan Coffee Table",
    price: 899.0,
    image: "/furniture8.jpeg",
    category: "tables",
    rating: 4.9,
    reviews: 83,
    description: "Reclaimed wood, hand-forged steel base",
  },
];

export function CollectionSection() {
  return (
    <section className="bg-stone-50 py-20">
      <motion.div
        className="container px-6 md:px-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-medium text-amber-700">
                Featured Collection
              </span>
            </div>
            <h2 className="font-serif text-3xl font-medium md:text-4xl">
              Timeless Elegance
            </h2>
            <p className="max-w-lg text-stone-600">
              Curated pieces that blend contemporary design with traditional
              craftsmanship.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Button
              variant="ghost"
              className="text-stone-600 hover:text-amber-700"
              asChild
            >
              <Link href="/collections/new">New Arrivals</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-stone-600 hover:text-amber-700"
              asChild
            >
              <Link href="/collections/bestsellers">Bestsellers</Link>
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard
                product={product}
                className="group rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg"
              />
            </motion.div>
          ))}
        </div>

        {/* Explore Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            variant="outline"
            className="group border-amber-700 text-amber-700 hover:bg-amber-50"
            asChild
          >
            <Link href="/collections" className="inline-flex items-center">
              Explore All Collections
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
