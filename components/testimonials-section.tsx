"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { responsiveStyles } from "@/lib/utils";

const testimonials = [
  {
    name: "Emily Rodriguez",
    role: "Design Director, Tech Startup",
    quote:
      "K_T_P transformed our workspace into an inspiring environment that reflects our company&apos;s innovative spirit.",
    avatar: "/api/placeholder/100/100",
  },
  {
    name: "Michael Chen",
    role: "Residential Client",
    quote:
      "Their attention to detail and understanding of my lifestyle was exceptional. Every space feels perfectly curated.",
    avatar: "/api/placeholder/100/100",
  },
  {
    name: "Sarah Thompson",
    role: "Hospitality Executive",
    quote:
      "K_T_P&apos;s design approach seamlessly blends functionality with aesthetic elegance.",
    avatar: "/api/placeholder/100/100",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className={`bg-neutral-50 ${responsiveStyles.spacing.section}`}>
      <div className={responsiveStyles.container}>
        <div className="text-center mb-12">
          <h2
            className={`font-serif font-bold text-neutral-900 ${responsiveStyles.typography.heading}`}
          >
            Client Experiences
          </h2>
          <p
            className={`text-neutral-600 max-w-2xl mx-auto mt-4 ${responsiveStyles.typography.body}`}
          >
            Hear directly from those who have experienced our transformative
            design approach.
          </p>
        </div>

        <div className={responsiveStyles.gridLayout}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="bg-white rounded-2xl p-6 shadow-md relative"
            >
              <Quote className="absolute top-4 left-4 text-emerald-100 h-12 w-12" />
              <p
                className={`italic mb-6 ${responsiveStyles.typography.body} text-neutral-700`}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </h4>
                  <p
                    className={`text-neutral-600 ${responsiveStyles.typography.caption}`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
