/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'embedlify.vercel.app',
        port: '',
        pathname: '/api/og',
      },
    ],
  },
}

module.exports = nextConfig
