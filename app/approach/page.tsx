"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Target, Layers, Lightbulb, Users } from "lucide-react";

const approachSteps = [
  {
    icon: Compass,
    title: "Discovery",
    description:
      "Understanding your vision, lifestyle, and unique requirements.",
  },
  {
    icon: Target,
    title: "Conceptualization",
    description: "Developing initial design concepts and mood boards.",
  },
  {
    icon: Layers,
    title: "Design Development",
    description: "Refining designs with detailed plans and 3D visualizations.",
  },
  {
    icon: Lightbulb,
    title: "Implementation",
    description: "Executing the design with precision and attention to detail.",
  },
];

const ApproachPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Design Philosophy</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A holistic approach that transforms spaces and elevates living
          experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {approachSteps.map((step, index) => (
            <div key={step.title} className="flex items-start space-x-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-primary/10 p-4 rounded-full"
              >
                <step.icon size={32} className="text-primary" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-100 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-6">Our Core Values</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Users size={24} className="mr-4 text-primary" />
              <span>Client-Centric Collaboration</span>
            </div>
            <div className="flex items-center">
              <Lightbulb size={24} className="mr-4 text-primary" />
              <span>Innovative Design Solutions</span>
            </div>
            <div className="flex items-center">
              <Layers size={24} className="mr-4 text-primary" />
              <span>Sustainable and Thoughtful Design</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ApproachPage;
