import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Full from "../assets/Full.png";
import Subtract from "../assets/Subtract.png";

export default function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${Full})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      {/* Foreground Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${Subtract})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />

      {/* Gradient Overlay (Covers Both Images) */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#121212]/60 to-[#121212]/0"></div>
    </div>
  );
}
