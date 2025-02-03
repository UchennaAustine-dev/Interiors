"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react"; // Removed ShoppingCart

const bestsellers = [
  {
    name: "Minimalist Lounge Chair",
    price: 2895,
    rating: 4.8,
    image: "/int1.jpeg",
    href: "/products/minimalist-lounge-chair",
  },
  {
    name: "Sculptural Side Table",
    price: 1595,
    rating: 4.9,
    image: "/int5.jpeg",
    href: "/products/sculptural-side-table",
  },
  {
    name: "Organic Floor Lamp",
    price: 1295,
    rating: 4.7,
    image: "/int7.jpeg",
    href: "/products/organic-floor-lamp",
  },
];

export const Bestsellers = () => {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Design Studio Bestsellers</h2>
          <p className="text-gray-600">
            Discover our most coveted pieces that blend exceptional
            craftsmanship, innovative design, and timeless elegance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestsellers.map(
            (
              product // Removed 'index'
            ) => (
              <Link key={product.name} href={product.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-900">
                      ${product.price.toLocaleString()}
                    </p>
                  </div>
                </motion.div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
};
