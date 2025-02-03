"use client";

import { CategoryNav } from "@/components/category-nav";
import { CollectionSection } from "@/components/collection-section";
import { CollaborationSection } from "@/components/collaboration-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { DesignProcessSection } from "@/components/design-process-section";
import SiteHeader from "@/components/common/site-header";
import { SiteFooter } from "@/components/common/site-footer";
import HeroSection from "@/components/hero-section";
import NewsletterSection from "@/components/newsletter-section";
import { Bestsellers } from "@/components/best-sellers";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <SiteHeader />
      <main className="flex-1">
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          <HeroSection />
          <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-12">
            <CategoryNav />
            <CollectionSection />
            <Bestsellers />
            <CollaborationSection />
            <TestimonialsSection />
            <CaseStudiesSection />
            <DesignProcessSection />
            <NewsletterSection />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
