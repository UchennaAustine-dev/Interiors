"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import PortfolioCard from "@/components/portfolio-card";

const portfolioCategories = [
  "Residential",
  "Commercial",
  "Luxury",
  "Modern",
  "Minimalist",
];

const portfolioProjects = [
  {
    id: 1,
    title: "Urban Loft Transformation",
    category: "Residential",
    image: "/int3.jpeg",
    description: "Modern minimalist design in a downtown apartment",
  },
  // Add more projects
];

const PortfolioPage = () => {
  // Change state initialization
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = selectedCategory
    ? portfolioProjects.filter(
        (project) => project.category === selectedCategory
      )
    : portfolioProjects;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Portfolio</h1>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "bg-primary/10" : ""}
          >
            <Grid size={20} className="mr-2" /> Grid
          </Button>
          <Button
            variant="outline"
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-primary/10" : ""}
          >
            <List size={20} className="mr-2" /> List
          </Button>
        </div>
      </div>

      <div className="flex space-x-4 mb-8">
        <Button
          variant={!selectedCategory ? "default" : "secondary"}
          onClick={() => setSelectedCategory(null)}
        >
          All Projects
        </Button>
        {portfolioCategories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <motion.div
        layout
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {filteredProjects.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
            viewMode={viewMode}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
