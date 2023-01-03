/** @type {import('next').NextConfig} */
const nextConfig = {
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
