/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com', 'admin.tesdeveloper.me'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
