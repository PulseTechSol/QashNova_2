/** @type {import('next').NextConfig} */
const ONE_YEAR_IN_SECONDS = 31536000;
// Calculate expiration date (1 year from now)
const expirationDate = new Date(
  Date.now() + ONE_YEAR_IN_SECONDS * 1000
).toUTCString();

const nextConfig = {
  async headers() {
    return [
      {
        // Apply to all image types in public folder
        source: "/:all*(png|jpg|jpeg|gif|svg|webp|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${ONE_YEAR_IN_SECONDS}, immutable`,
          },
          {
            key: "Expires",
            value: expirationDate,
          },
        ],
      },
      {
        // Apply to Next.js optimized images
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${ONE_YEAR_IN_SECONDS}, immutable`,
          },
          {
            key: "Expires",
            value: expirationDate,
          },
        ],
      },
      {
        // Apply to static image files with query params
        source: "/:path*.(png|jpg|jpeg|gif|svg|webp|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${ONE_YEAR_IN_SECONDS}, immutable`,
          },
          {
            key: "Expires",
            value: expirationDate,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
