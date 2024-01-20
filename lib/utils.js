import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const linksArray = [
  { href: '#hero', label: 'Strona główna' },
  { href: '#about', label: 'O mnie' },
  { href: '#offer', label: 'Oferta' },
  { href: '#contact', label: 'Kontakt' }
];