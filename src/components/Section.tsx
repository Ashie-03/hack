import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Section({ buttonText, heading, description, width }) {
  return (
    <motion.div 
      className="px-10 md:px-16 lg:px-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center flex flex-col items-center gap-6">
        <Button text={buttonText} heading={heading} />
        <motion.p 
          className={`text-lg text-gray-300 ${width ? `w-${width}` : "w-auto"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
