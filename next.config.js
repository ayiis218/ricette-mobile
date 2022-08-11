/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      domains: [
         'http://localhost:8120/',
         'https://ricette-dellapp.herokuapp.com/',
      ],
   },
   env: {
      API_URL: process.env.NEXT_PUBLIC_API_URL,
   },
   // swcMinify: true,
};

module.exports = nextConfig;
