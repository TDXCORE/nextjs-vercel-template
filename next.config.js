
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        path: false,
        crypto: false,
        stream: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
