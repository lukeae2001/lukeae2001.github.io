import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <<< THIS LINE IS NEEDED for static export
  /* other config options can go here later if needed */
};

export default nextConfig;
