/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com"],
  },
  compilerOptions: {
    paths: {
      "@/components/*": ["components/*"],
    },
  },
  env: {
    // without /
    // BACKEND_SERVER: "http://localhost:8000",
    BACKEND_SERVER: "https://backend.netventura.com",
    // BACKEND_SERVER: "http://192.168.16.99:8000",
  },
};

module.exports = nextConfig;
