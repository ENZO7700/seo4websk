import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function AetherFlowLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>AetherFlow Logo</title>
      <path d="M12 2a10 10 0 1 0 10 10" className="text-accent" />
      <path
        d="M12 2a10 10 0 0 0-9.95 9.5"
        className="text-primary"
        style={{
          animation: "spin 10s linear infinite",
          transformOrigin: "center",
        }}
      />
      <path
        d="M2 12a10 10 0 0 0 9.5 9.95"
        className="text-primary"
        style={{
          animation: "spin 10s linear infinite reverse",
          transformOrigin: "center",
          animationDelay: "-5s",
        }}
      />
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </svg>
  );
}
