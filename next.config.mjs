/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["marketplace.canva.com"],
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
    ],
  },
};

export default nextConfig;
