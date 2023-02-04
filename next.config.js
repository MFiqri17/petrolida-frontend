/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com'],
  },
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/dashboard/profile',
        destination: '/dashboard/profile/general',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
