"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types";
import { memo } from "react";

interface ProductCardProps
  extends Omit<MotionProps, "onAnimationStart" | "onDragStart"> {
  product: Product;
  className?: string;
}

export const ProductCard = memo(
  ({ product, className, ...props }: ProductCardProps) => {
    return (
      <motion.div
        className={cn("group relative p-4", className)}
        {...props}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href={`/product/${product.id}`}
          aria-label={`View ${product.name}`}
        >
          <div className="aspect-square overflow-hidden rounded-lg border bg-background">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover transition-transform group-hover:scale-105"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-4 right-4 opacity-0 transition-opacity group-hover:opacity-100"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
          <div className="mt-6 space-y-2">
            <h3 className="font-medium">{product.name}</h3>
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
              {product.rating && (
                <div className="flex items-center gap-0.5">
                  <Star className="h-4 w-4 fill-primary" />
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
              )}
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }
);

ProductCard.displayName = "ProductCard";
