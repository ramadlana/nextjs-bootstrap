/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com"],
  },
  env: {
    // without /
    BACKEND_SERVER: "http://localhost:8000",
    // BACKEND_SERVER: "https://89cd-125-166-119-52.ngrok.io",
  },
};

module.exports = nextConfig;
