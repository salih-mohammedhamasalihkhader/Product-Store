import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // 👈 change if needed
      },
      {
        protocol: "http",
        hostname: "localhost", // 👈 for local backend images
      },
    ],
  },
};

export default nextConfig;
