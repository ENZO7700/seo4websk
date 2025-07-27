import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function Seo4WebLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>seo4web Logo</title>
      <circle cx="11" cy="11" r="8" className="text-primary/70" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" className="text-primary/70" />
      <path d="M7 11l2 2 4-4" className="text-accent stroke-[3px]" />
    </svg>
  );
}
