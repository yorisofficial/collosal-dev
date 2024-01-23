/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fakeimg.pl",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
