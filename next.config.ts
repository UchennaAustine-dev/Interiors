/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for better development practices
  reactStrictMode: true,

  // Configure images for optimization and remote sources
  images: {
    // Use remotePatterns instead of domains for better security and flexibility
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],

    // Set device sizes for responsive images
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
};

export default nextConfig;
