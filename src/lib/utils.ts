// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combină clasele Tailwind inteligent, rezolvând conflictele 
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}