/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**'
      },
      {
        protocol: 'https',
        hostname: 'backend-ecommerce-a4gr.onrender.com',
        port: '',
        pathname: '/uploads/**'
      }
    ]
  }
};

export default nextConfig;
