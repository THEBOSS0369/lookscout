import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This will skip ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Optional: Also skip TypeScript errors if needed
  },
};

export default nextConfig;
