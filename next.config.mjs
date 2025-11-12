/** @type {import('next').NextConfig} */
const ONE_YEAR_IN_SECONDS = 31536000;
const expirationDate = new Date(
  Date.now() + ONE_YEAR_IN_SECONDS * 1000
).toUTCString();

const nextConfig = {
  async headers() {
    return [
      {
        // Apply to all image types
        source: "/:all*(png|jpg|jpeg|gif|svg|webp|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${ONE_YEAR_IN_SECONDS}, immutable`,
            // Cache for 1 year & don’t revalidate unless the URL changes
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
