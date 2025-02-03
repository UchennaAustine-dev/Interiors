"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail } from "lucide-react"; // Removed unused Calendar import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const consultationOptions = [
  {
    title: "Initial Consultation",
    duration: "1 Hour",
    price: "Complimentary",
    description: "Explore your design vision and project potential.",
  },
  {
    title: "Comprehensive Design Review",
    duration: "2 Hours",
    price: "$250",
    description: "Detailed analysis and personalized design recommendations.",
  },
];

const ConsultationsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  // Properly type the event parameter
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Properly type the event parameter
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement form submission logic
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Book a Consultation</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Transform your space with expert design guidance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold mb-6">Consultation Options</h2>
          {consultationOptions.map((option) => (
            <div
              key={option.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{option.title}</h3>
                <span className="text-primary font-medium">{option.price}</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock size={20} className="mr-3 text-primary" />
                <span>{option.duration}</span>
              </div>
              <p className="text-gray-600">{option.description}</p>
            </div>
          ))}

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={20} className="mr-3 text-primary" />
                <span>123 Design Street, Creative City</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-primary" />
                <span>consultation@ktpinteriors.com</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">
              Schedule Your Consultation
            </h2>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
            />
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
            />
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
            />
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select Consultation Type</option>
              {consultationOptions.map((option) => (
                <option key={option.title} value={option.title}>
                  {option.title}
                </option>
              ))}
            </select>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project"
              rows={4}
            />
            <Button type="submit" className="w-full">
              Book Consultation
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultationsPage;
