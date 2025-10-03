import axios from "axios";
import websitesDataFallback from "@/cmsFallbackContent/website.json";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || "";

// 🔑 Axios instance with default config
const strapi = axios.create({
  baseURL: STRAPI_URL,
  headers: {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`,
  },
});

// 🔑 Centralized error logger
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

// ✅ Generic fetcher (always returns { data, meta } or null)
export async function fetchFromStrapi(
  path: string,
  params: Record<string, unknown> = {}
) {
  try {
    const res = await strapi.get(path, { params });
    return res.data;
  } catch (error: unknown) {
    logError("fetchFromStrapi", error);
    return null;
  }
}

// ✅ Generic page fetcher (handles Single & Collection types)
export async function fetchPageData(page: string) {
  const json = await fetchFromStrapi(`/api/${page}`, { populate: "*" });

  if (!json) return null;

  // Single Type
  if (json?.data) return json.data;

  return null;
}

// ✅ Blogs collection fetcher
export async function fetchBlogs() {
  const json = await fetchFromStrapi("/api/blogs", { populate: "*" });
  return json?.data || [];
}
