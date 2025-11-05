import axios from "axios";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || "";

// ✅ Axios instance (default headers + no cache headers allowed)
const strapi = axios.create({
  baseURL: STRAPI_URL,
  headers: {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    "Cache-Control": "no-cache", // ✅ Stop browser caching
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

// ✅ Generic fetcher — forcing unique request to bypass cache (key change)
export async function fetchFromStrapi(
  path: string,
  params: Record<string, unknown> = {}
) {
  try {
    const res = await strapi.get(path, {
      params: {
        ...params,
        // ✅ Trick to always fetch fresh data, avoid static/edge cache
        t: Date.now(),
      },
    });
    return res.data;
  } catch (error: unknown) {
    logError("fetchFromStrapi", error);
    return null;
  }
}

// ✅ Generic page fetcher (same, just uses updated fetchFromStrapi)
export async function fetchPageData(page: string) {
  const json = await fetchFromStrapi(`/api/${page}`, { populate: "*" });

  if (!json) return null;
  if (json?.data) return json.data;

  return null;
}

// ✅ Blogs fetcher (unchanged logic, uses updated no-cache fetch)
export async function fetchBlogs() {
  const json = await fetchFromStrapi("/api/blogs", { populate: "*" });
  return json?.data || [];
}
