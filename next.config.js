/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com"],
  },
  env: {
    BACKEND_SERVER: "http://localhost:8000",
    // BACKEND_SERVER: "https://a0a7-125-166-118-26.ngrok.io",
  },
};

module.exports = nextConfig;
