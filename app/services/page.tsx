"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Building, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesList = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Transforming living spaces into personalized sanctuaries.",
    features: [
      "Complete home interior design",
      "Space planning and optimization",
      "Custom furniture selection",
    ],
  },
  {
    icon: Building,
    title: "Commercial Design",
    description: "Creating inspiring workspaces that enhance productivity.",
    features: [
      "Office layout design",
      "Brand-aligned interior concepts",
      "Ergonomic workspace solutions",
    ],
  },
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<
    (typeof servicesList)[number]
  >(servicesList[0]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Design Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive design solutions tailored to your unique vision and
          needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {servicesList.map((service) => (
            <Button
              key={service.title}
              variant={
                selectedService.title === service.title
                  ? "default"
                  : "secondary"
              }
              className="w-full justify-start space-x-4 py-6"
              onClick={() => setSelectedService(service)}
            >
              <service.icon size={24} />
              <span>{service.title}</span>
            </Button>
          ))}
        </div>

        <motion.div
          key={selectedService.title}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-6">
            <selectedService.icon size={48} className="text-primary mr-4" />
            <h2 className="text-2xl font-bold">{selectedService.title}</h2>
          </div>
          <p className="text-gray-600 mb-6">{selectedService.description}</p>
          <div>
            <h3 className="text-lg font-semibold mb-4">What&apos;s Included</h3>
            {selectedService.features.map((feature) => (
              <div key={feature} className="flex items-center mb-2">
                <CheckCircle size={20} className="text-primary mr-3" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <Button className="mt-6 w-full">Book Consultation</Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
