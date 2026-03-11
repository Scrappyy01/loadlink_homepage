import type { NextConfig } from "next";
import type { Redirect } from "next/dist/lib/load-custom-routes";
import fs from "node:fs";
import path from "node:path";
// import { redirects } from "./lib/redirects";
import redirectsJson from "./lib/redirects.json";

type RedirectJson = {
  source: string;
  destination: string;
  permanent?: boolean;
};

const redirects = redirectsJson as RedirectJson[];

console.log("Loaded redirects from JSON:", redirects);

function normalizeSource(source: string) {
  if (!source.startsWith("/")) source = `/${source}`;
  return source;
}

const nextConfig: NextConfig = {
  // Enforce trailing slashes for consistent canonical URLs
  trailingSlash: false,

  output: "standalone",

  // Redirects
  async redirects(): Promise<Redirect[]> {
    const expanded: Redirect[] = redirects.flatMap((rule) => {
      const src = normalizeSource(rule.source);

      const withSlash = src.endsWith("/") ? src : `${src}/`;
      const withoutSlash = withSlash.replace(/\/$/, "");

      const mk = (source: string): Redirect => ({
        source,
        destination: rule.destination,
        permanent: rule.permanent ?? true,
      });

      return [mk(withSlash), mk(withoutSlash)];
    });

    const seen = new Set<string>();
    return expanded.filter((r) => {
      const key = `${r.source}->${r.destination}->${r.permanent ? 1 : 0}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  },

  // Security & performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
