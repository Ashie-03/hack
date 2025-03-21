import React from "react";
import { motion } from "framer-motion";
import MapMarkerBg from "../assets/MapMarker.svg"; // Ensure correct path

interface MapMarkerProps {
  heading: string;
  subheading: string;
}

const MapMarker: React.FC<MapMarkerProps> = ({ heading, subheading }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center w-36 h-48 sm:w-40 sm:h-52 md:w-48 md:h-60 p-4"
      style={{
backgroundImage: `url(${MapMarkerBg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      initial={{ y: 0 }}
      animate={{
        y: [0, -10, 0], // Floating effect
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut"
      }}
      whileHover={{
        rotate: [0, -2, 2, -2, 0], // Wobble effect
        transition: { duration: 0.3 }
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center top-[50px] pt-5 p-4">
        <h3 className="font-cinzel text-[#fade78] text-lg md:text-xl leading-tight">
          {heading}
        </h3>
        <p className="font-forum text-[#fade78] text-sm md:text-base mt-1">
          {subheading}
        </p>
      </div>
    </motion.div>
  );
};

export default MapMarker;
