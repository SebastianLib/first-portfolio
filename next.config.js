/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { loader: "custom", loaderFile: "./loader.js" },
};

module.exports = nextConfig;
