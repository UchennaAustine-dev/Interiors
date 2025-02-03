"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const articleCategories = [
  "Design Trends",
  "Inspiration",
  "Tips & Guides",
  "Industry Insights",
];

const journalArticles = [
  {
    id: 1,
    title: "Minimalist Design: Less is More",
    category: "Design Trends",
    date: "February 15, 2024",
    readTime: "5 min read",
    excerpt:
      "Exploring the elegance of minimalist interior design and its transformative power.",
    image: "/int4.jpeg",
    author: "Kate Thompson",
  },
  // Add more articles
];

const JournalPage = () => {
  // Change state initialization
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = selectedCategory
    ? journalArticles.filter((article) => article.category === selectedCategory)
    : journalArticles;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Design Journal</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Insights, inspiration, and expert perspectives on interior design.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <Button
          variant={!selectedCategory ? "default" : "secondary"}
          onClick={() => setSelectedCategory(null)}
        >
          All Articles
        </Button>
        {articleCategories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-primary text-sm font-medium">
                  {article.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={16} className="mr-2" />
                  {article.date}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock size={16} className="mr-2" />
                  {article.readTime}
                </div>
                <Link href={`/journal/${article.id}`}>
                  <Button variant="link">Read More</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No articles found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default JournalPage;
