/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com"],
  },
  env: {
    // without /
    BACKEND_SERVER: "http://localhost:8000",
    // BACKEND_SERVER: "https://backend.netventura.com",
    // BACKEND_SERVER: "http://192.168.16.99:8000",
    MIDTRANS_SNAP_JS_URL: "https://app.sandbox.midtrans.com/snap/snap.js",
    MIDTRANS_CLIENT_KEY: "SB-Mid-client-B3x2bO4FeslNUdtZ",
  },
};

module.exports = nextConfig;
