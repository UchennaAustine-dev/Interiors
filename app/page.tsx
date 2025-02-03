"use client";

import { CategoryNav } from "@/components/category-nav";
import { CollectionSection } from "@/components/collection-section";
import { CollaborationSection } from "@/components/collaboration-section";
import SiteHeader from "@/components/common/site-header";
import { SiteFooter } from "@/components/common/site-footer";
import HeroSection from "@/components/hero-section";
import NewsletterSection from "@/components/newsletter-section";
import { Bestsellers } from "@/components/best-sellers";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container space-y-12 py-8 px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <CategoryNav />
          <CollectionSection />
          <Bestsellers />
          <CollaborationSection />
          <NewsletterSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
