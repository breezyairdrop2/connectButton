/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/', // This matches any URL path
            destination: 'https://google.com/', // Proxy to the content on example.com
          },
        ]
      },
    output: undefined, // Keep SSR enabled
  };
  
  module.exports = nextConfig;
