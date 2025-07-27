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
      <path d="M15 3h6v6" className="text-primary" />
      <path d="M9 21H3v-6" className="text-accent" />
      <path d="M21 3l-7 7" className="text-primary" />
      <path d="M3 21l7-7" className="text-accent" />
    </svg>
  );
}
