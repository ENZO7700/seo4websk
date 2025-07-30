
"use client";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  className,
  ...props
}: {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  className?: string;
  [key: string]: any;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0",
        className
      )}
    >
        <div onMouseMove={onMouseMove} className="absolute inset-0 z-10">
            <motion.div
                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
                style={{
                background: useMotionTemplate`
                    radial-gradient(
                    250px circle at ${mouseX}px ${mouseY}px,
                    hsl(var(--primary) / 0.1),
                    transparent 80%
                    )
                `,
                }}
            />
        </div>
      <svg
        className={cn(
          "h-full w-full",
          "fill-gray-400/30 stroke-gray-400/30",
          "z-0"
        )}
      >
        <defs>
          <pattern
            id="grid"
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <path d={`M.5 ${height}V.5H${width}`} fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid)" />
      </svg>
    </div>
  );
}
