import React from "react";
import { motion } from "framer-motion";

const Heading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center text-center pt-4 overflow-visible"
    >
      {/* The World's Largest */}
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="text-[#FADE78] font-cinzel text-[10px] sm:text-[12px] md:text-[16px] lg:text-[24px] mb-[-16px] leading-tight 
        pl-4 sm:pl-6 md:pl-8 lg:pl-16"
      >
        The World's Largest
      </motion.h2>

      {/* Hackathon */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="flex items-baseline leading-none"
      >
        {/* "H" should be slightly larger than "ackathon" */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="font-bold font-cinzelDecorative bg-gradient-to-b from-[#B27D0F] via-[#DAB74F] via-[#FADE78] via-[#DAB74F] to-[#B27D0F] 
          text-transparent bg-clip-text 
          text-[60px] sm:text-[80px] md:text-[60px] lg:text-[100px]"
        >
          H
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="font-bold font-cinzelDecorative bg-gradient-to-b from-[#B27D0F] via-[#DAB74F] via-[#FADE78] via-[#DAB74F] to-[#B27D0F] 
          text-transparent bg-clip-text align-text-bottom tracking-[2px]
          text-[40px] sm:text-[55px] md:text-[40px] lg:text-[70px]"
        >
          ackathon
        </motion.span>
      </motion.h1>
    </motion.div>
  );
};

export default Heading;
