/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http://localhost:8120'],
  },
  // swcMinify: true,
};

module.exports = nextConfig;
