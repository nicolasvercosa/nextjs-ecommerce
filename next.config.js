/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["github.com", "i0.wp.com", "raw.githubusercontent.com"]
  }
}

module.exports = nextConfig
