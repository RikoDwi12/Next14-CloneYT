/** @type {import('next').NextConfig} */
const nextConfig = {  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'akcdn.detik.net.id',
        port: '',
        pathname: '/**',
      },
    ],
  },};

export default nextConfig;
