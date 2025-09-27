import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh6.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "www.theconjuringmovie.com",
      },
      {
        protocol: "https",
        hostname: "i.ebayimg.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
