/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/*",
      },
      {
        hostname: "scontent-waw2-1.cdninstagram.com",
      },
    ],
  },
};

module.exports = nextConfig;
