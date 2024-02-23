/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withMDX = require("@next/mdx")();

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
};

module.exports = withBundleAnalyzer(removeImports(withMDX(nextConfig)));
