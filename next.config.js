/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8082',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'api-jgj6.onrender.com',
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'api-jgj6.onrender.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
