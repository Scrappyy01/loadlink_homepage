// lib/redirects.ts
import type { Redirect } from "next/dist/lib/load-custom-routes";
import redirectsJson from "./redirects.json";

const data: any = (redirectsJson as any)?.default ?? redirectsJson;

export const redirects: Redirect[] = Array.isArray(data)
  ? (data as Redirect[])
  : [];
