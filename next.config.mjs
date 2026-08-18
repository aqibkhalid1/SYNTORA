import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
};

export default nextConfig;

// Enables `next dev` to behave correctly with Cloudflare bindings/runtime.
// This does not affect the actual Cloudflare build — that goes through
// `opennextjs-cloudflare build` (see the "deploy" script in package.json).
initOpenNextCloudflareForDev();
