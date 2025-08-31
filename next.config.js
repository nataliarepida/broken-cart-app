/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["picsum.photos"],
  },
  webpack: (config, { dev, isServer }) => {
    // Add any custom webpack configurations here if needed
    return config;
  },
  onError: {
    overlay: false, // Disable the error overlay completely
  },
};

export default nextConfig;
