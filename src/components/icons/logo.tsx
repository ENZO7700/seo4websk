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
      <path d="M3 17l6-6 4 4 8-8" className="text-primary" />
      <path d="M17 7h4v4" className="text-primary" />
    </svg>
  );
}
