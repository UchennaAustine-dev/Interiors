"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement newsletter signup logic
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-10 text-center"
        >
          <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-4">
            Stay Inspired
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
            Join our design community and receive exclusive insights, trend
            reports, and behind-the-scenes glimpses of our creative process.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto flex space-x-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors flex items-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Subscribe
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center space-x-4 text-emerald-700">
              <Check className="h-8 w-8" />
              <p className="text-xl font-medium">Thank you for subscribing!</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
