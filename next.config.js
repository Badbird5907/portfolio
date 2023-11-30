/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
};

module.exports = removeImports(nextConfig);
