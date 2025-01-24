import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';


const nextConfig: NextConfig = {
  output: "export", // Required for GitHub Pages static export
  basePath: isProd ? "" : "/rgd_demo",
  assetPrefix: isProd ? "" : "/rgd_demo/",
  trailingSlash: true, // Ensure all routes end with a slash
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
