/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix workspace root detection warning
  outputFileTracingRoot: __dirname,

  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here
  },

  // Other configurations
  reactStrictMode: true,
}

module.exports = nextConfig
