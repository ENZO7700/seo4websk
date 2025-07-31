
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const GridPattern = ({
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
}) => {
  const aniamtionVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
  }

  return (
    <motion.svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-primary/5 stroke-primary/10",
        className
      )}
      variants={aniamtionVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="visible"
      viewport={{ once: true }}
      {...props}
    >
      <defs>
        <pattern
          id="grid-pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern)" />
    </motion.svg>
  );
};

export default GridPattern;
