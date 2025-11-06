/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Apply to all image types
        source: "/:all*(png|jpg|jpeg|gif|svg|webp|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
            // Cache for 1 year & don’t revalidate unless the URL changes
          },
        ],
      },
    ];
  },
};

export default nextConfig;
