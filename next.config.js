/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
