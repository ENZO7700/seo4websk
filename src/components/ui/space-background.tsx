
"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { forwardRef } from "react";

export const SpaceBackground = forwardRef<HTMLDivElement>((props, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ["start start", "end start"],
  });

  const yStars1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yStars2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yStars3 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <div className="space-bg">
      <motion.div id="stars" style={{ y: yStars1 }} />
      <motion.div id="stars2" style={{ y: yStars2 }} />
      <motion.div id="stars3" style={{ y: yStars3 }} />
    </div>
  );
});

SpaceBackground.displayName = "SpaceBackground";
