// @ts-check
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/**
 * @type {(phase: string, context: { defaultConfig: import('next').NextConfig }) => import('next').NextConfig}
 */
export default (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: "export",
    distDir: "dist",
    // assetPrefix allows you to use a CDN in production
    assetPrefix: isDev ? undefined : undefined,

    reactStrictMode: true,

    experimental: {
      // Enable forbidden and unauthorized handling
      authInterrupts: true,
    },

    // Recommended for Apache/Afrihost URL consistency
    trailingSlash: true,

    images: {
      unoptimized: true,
    },
  };

  return nextConfig;
};
