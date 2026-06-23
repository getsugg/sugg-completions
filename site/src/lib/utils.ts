import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function tokenStyle(t: { color?: string; fontStyle?: number }): string | undefined {
  if (!t.color && !t.fontStyle) return undefined;
  const parts: string[] = [];
  if (t.color) parts.push(`color:${t.color}`);
  if (t.fontStyle) {
    if (t.fontStyle & 1) parts.push("font-style:italic");
    if (t.fontStyle & 2) parts.push("font-weight:bold");
    if (t.fontStyle & 4) parts.push("text-decoration:underline");
  }
  return parts.join(";");
}

export function hoverTokenStyle(t: { color?: string; fontStyle?: number }): string {
  const base = tokenStyle(t) || "";
  return base || "";
}
