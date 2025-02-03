"use client";

import React from "react";
import Image from "next/image";
import { Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: string;
}

const ArticleDetail = () => {
  // In a real implementation, fetch article by ID
  const article: Article = {
    id: 1,
    title: "Minimalist Design: Less is More",
    category: "Design Trends",
    date: "February 15, 2024",
    readTime: "5 min read",
    author: "Kate Thompson",
    image: "/journal/minimalist-design.jpg",
    content: `
      Minimalist design is more than just an aesthetic choice—it's a philosophy that transforms spaces into serene, functional environments. 
      
      ## The Essence of Minimalism

      At its core, minimalist design embraces the principle of "less is more". This approach strips away unnecessary elements, focusing on:

      - Clean lines and simple geometries
      - Neutral color palettes
      - Functional, high-quality furniture
      - Maximum impact through purposeful design

      ## Key Principles

      1. **Simplicity**: Every element serves a specific purpose
      2. **Quality over Quantity**: Invest in fewer, better pieces
      3. **Negative Space**: Embrace emptiness as a design element
    `,
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex justify-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {article.date}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              {article.readTime}
            </div>
          </div>
        </div>

        <div className="relative h-96 w-full mb-12">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose lg:prose-xl">
          {/* Render markdown content */}
          {article.content.split("\n\n").map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph.startsWith("## ") ? (
                <h2>{paragraph.replace("## ", "")}</h2>
              ) : paragraph.startsWith("### ") ? (
                <h3>{paragraph.replace("### ", "")}</h3>
              ) : paragraph.startsWith("1. ") || paragraph.startsWith("- ") ? (
                <ul>
                  {paragraph.split("\n").map((item, i) => (
                    <li key={i}>{item.replace(/^[1-9]\. |-\s/, "")}</li>
                  ))}
                </ul>
              ) : (
                <p>{paragraph}</p>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-12 border-t pt-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Share This Article</h3>
          <div className="flex justify-center space-x-4">
            <Button variant="outline">Share on Twitter</Button>
            <Button variant="outline">Share on LinkedIn</Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;
