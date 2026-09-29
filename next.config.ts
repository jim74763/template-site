import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
    },
    allowedDevOrigins: ['omarchy.tail7f8f0c.ts.net'],
};

export default nextConfig;
