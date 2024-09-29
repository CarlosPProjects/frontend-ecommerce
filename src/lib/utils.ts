import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cleanParam(param:string | string[] | undefined) {
  return param?.toString().replaceAll('-', ' ')
}