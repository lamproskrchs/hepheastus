/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.ece.uop.gr', 'assets.aceternity.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
    return config;
  }
};

export default nextConfig;
