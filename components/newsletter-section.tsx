"use client";

import { useState, memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const emailSchema = z.string().email();

const NewsletterSection = memo(() => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      emailSchema.parse(email);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our newsletter.",
      });

      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        variant: "destructive",
        title: "Invalid email",
        description: "Please enter a valid email address.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-background/95 to-background/90 px-8 py-16 text-foreground md:px-12 md:py-20"
    >
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 animate-gradient-x" />

      <div className="relative z-10 max-w-2xl space-y-8 px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold md:text-5xl"
        >
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            GET AHEAD OF THE
            <br />
            FASHION GAME AND BE
            <br />
            THE FIRST TO SHOP OUR
            <br />
            LATEST COLLECTION
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-muted-foreground"
        >
          Sign up for our newsletter and discover a world of fashion before
          anyone else. Don&apos;t miss out on your chance to elevate your
          wardrobe with our exclusive designs.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="h-12 bg-muted/50 border-border pl-11 pr-4 backdrop-blur-sm transition-colors focus:bg-muted/70 focus:ring-2 focus:ring-primary/50"
              aria-label="Email Address"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="h-12 px-6 bg-primary hover:bg-primary/90 transition-colors group relative overflow-hidden"
            aria-label="Subscribe"
          >
            <span className="relative z-10 flex items-center">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary/80 to-primary/60 opacity-0 transition-opacity group-hover:opacity-100" />
          </Button>
        </motion.form>
      </div>
    </motion.section>
  );
});

NewsletterSection.displayName = "NewsletterSection";

export default NewsletterSection;
