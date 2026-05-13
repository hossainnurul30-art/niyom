import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/niyom",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
