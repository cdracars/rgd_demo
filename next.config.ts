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
  webpack: (config) => {
    // Enable filesystem caching with absolute cache location
    config.cache = {
      type: "memory",
    };

    // Suppress caching-related warnings
    config.ignoreWarnings = [
      { message: /Caching failed for pack/ },
    ];

    config.output.publicPath = isProd
      ? '/_next/'
      : '/rgd_demo/_next/';

    return config;
  },
};

export default nextConfig;
