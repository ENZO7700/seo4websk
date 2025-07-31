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
      <path d="M10.5 19.5A9 9 0 1 0 5.24 7.24" className="text-primary/70"></path>
      <path d="M16 12a4 4 0 0 1-8 0" className="text-primary/70"></path>
      <path d="m21 21-4.35-4.35"></path>
      <path d="M12 8V5" className="text-accent stroke-[2.5px]"></path>
      <path d="M12 19v-3" className="text-accent stroke-[2.5px]"></path>
      <path d="M9 12H6" className="text-accent stroke-[2.5px]"></path>
      <path d="M18 12h-3" className="text-accent stroke-[2.5px]"></path>
    </svg>
  );
}

    