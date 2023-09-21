/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "out/build",
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
