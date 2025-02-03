"use client";

import { motion } from "framer-motion";
import { Ruler, Palette, Building2, Check } from "lucide-react";
import { responsiveStyles } from "@/lib/utils";

const processSteps = [
  {
    icon: Ruler,
    title: "Consultation & Discovery",
    description:
      "In-depth exploration of your vision, lifestyle, and design aspirations.",
    stepNumber: "01",
  },
  {
    icon: Palette,
    title: "Conceptual Design",
    description:
      "Crafting unique design concepts that translate your vision into tangible form.",
    stepNumber: "02",
  },
  {
    icon: Building2,
    title: "Implementation",
    description:
      "Precise execution of design plans with meticulous attention to detail.",
    stepNumber: "03",
  },
  {
    icon: Check,
    title: "Final Reveal",
    description:
      "Presenting a transformed space that exceeds expectations and reflects your essence.",
    stepNumber: "04",
  },
];

export const DesignProcessSection = () => {
  return (
    <section className={`bg-neutral-50 ${responsiveStyles.spacing.section}`}>
      <div className={responsiveStyles.container}>
        <div className="text-center mb-12">
          <h2
            className={`font-serif font-bold text-neutral-900 ${responsiveStyles.typography.heading}`}
          >
            Our Design Process
          </h2>
          <p
            className={`text-neutral-600 max-w-2xl mx-auto mt-4 ${responsiveStyles.typography.body}`}
          >
            A comprehensive, client-centric approach that transforms spaces and
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="bg-white rounded-2xl p-6 text-center relative overflow-hidden group"
            >
              <div className="absolute top-4 left-4 text-5xl font-serif font-bold text-emerald-100/50">
                {step.stepNumber}
              </div>
              <div className="mb-6 flex justify-center">
                <step.icon className="h-12 w-12 text-emerald-700 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-4">
                {step.title}
              </h3>
              <p
                className={`text-neutral-600 ${responsiveStyles.typography.body}`}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
