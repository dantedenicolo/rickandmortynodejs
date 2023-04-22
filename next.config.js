/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  // image domains
  images: {
    domains: ['rickandmortyapi.com']
  }
}

module.exports = nextConfig
