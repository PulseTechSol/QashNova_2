import axios from "axios";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || "";

// ✅ Axios instance - Cache-Control headers prevent browser-level caching
// Next.js handles server-side caching via ISR (Incremental Static Regeneration)
const strapi = axios.create({
  baseURL: STRAPI_URL,
  headers: {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    "Cache-Control": "no-cache", // Prevents browser-level caching
    Pragma: "no-cache",
    Expires: "0",
  },
});

// ✅ Centralized error logger (no change)
function logError(context: string, error: unknown) {
  if (axios.isAxiosError(error)) {
    console.error(`[${context}] Axios Error:`, {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });
  } else if (error instanceof Error) {
    console.error(`[${context}] Error:`, error.message);
  } else {
    console.error(`[${context}] Unknown Error:`, error);
  }
}

// ✅ Generic fetcher — Next.js handles caching via revalidation
export async function fetchFromStrapi(
  path: string,
  params: Record<string, unknown> = {}
) {
  try {
    const res = await strapi.get(path, {
      params: {
        ...params,
      },
    });
    return res.data;
  } catch (error: unknown) {
    logError("fetchFromStrapi", error);
    return null;
  }
}

// ✅ Generic page fetcher - Next.js caches responses and revalidates based on page revalidate setting
export async function fetchPageData(page: string) {
  const json = await fetchFromStrapi(`/api/${page}`, { populate: "*" });

  if (!json) return null;
  if (json?.data) return json.data;

  return null;
}

// ✅ Blogs fetcher - Next.js caches responses and revalidates based on page revalidate setting
export async function fetchBlogs() {
  const json = await fetchFromStrapi("/api/blogs", { populate: "*" });
  return json?.data || [];
}
