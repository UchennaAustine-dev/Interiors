"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface PortfolioCardProps {
  project: Project;
  viewMode: "grid" | "list";
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, viewMode }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`
        bg-white shadow-md rounded-lg overflow-hidden 
        ${viewMode === "list" ? "flex items-center space-x-6" : ""}
      `}
    >
      <div className={viewMode === "list" ? "w-1/3" : "w-full"}>
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="w-full object-cover"
        />
      </div>

      <div className={`p-6 ${viewMode === "list" ? "w-2/3" : ""}`}>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-primary font-medium">
            {project.category}
          </span>
          <Link href={`/portfolio/${project.id}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-primary hover:text-primary/80"
            >
              View Project <ArrowRight size={16} className="ml-2" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
