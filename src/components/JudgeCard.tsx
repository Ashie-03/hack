import React, { useState } from "react";
import { motion } from "framer-motion";
import JudgeCardOutline from "../assets/JudgeCardOutline.svg";

interface JudgeCardProps {
  image: string;
  name: string;
  description: string;
  link?: string;
  onClick?: () => void;
}

export default function JudgeCard({ image, name, description, link, onClick }: JudgeCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Wrap the card content in a component to maintain the hover state logic
  const CardContent = () => (
    <div 
      className="relative w-[300px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SVG Outline (On Top) - Using motion.img for the SVG animation */}
      <motion.img 
        src={JudgeCardOutline} 
        alt="Card Outline" 
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        style={{ 
          transformOrigin: 'center',
          top: '0px',
          left: '0px'
        }}
        animate={{ 
          scaleX: isHovered ? -1 : 1 
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card Content */}
      <div className="relative w-full h-full overflow-hidden rounded-[15px] pt-[10px] pb-[10px] pl-[23px] pr-[23px]
        sm:pt-[25px] sm:pb-[25px] sm:pl-[10px] sm:pr-[11px]
        md:pt-[10px] md:pb-[10px] md:pl-[13px] md:pr-[14px]
        lg:pt-[10px] lg:pb-[12px] lg:pl-[23px] lg:pr-[23px]">
        {/* Background Image with Border - Hidden when hovered */}
        <motion.img 
          src={image} 
          alt="Judge" 
          className="w-full h-full object-cover border-2 border-[#FADE78] rounded-[12px]"
          animate={{ 
            opacity: isHovered ? 0 : 1 
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(18,18,18,0.8) 0%, rgba(18,18,18,0.2) 46%, rgba(18,18,18,1) 100%)",
          }}
        ></div>
        
        {/* Content Container - For positioning the text */}
        <motion.div 
          className="absolute inset-0 flex flex-col justify-end p-6"
          initial={false}
          animate={{
            alignItems: isHovered ? 'center' : 'flex-start',
            justifyContent: isHovered ? 'center' : 'flex-end',
            paddingLeft: isHovered ? '1.5rem' : '1rem'
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Name Text */}
          <motion.div 
            className="text-[#FADE78] text-[28px] font-cinzel z-20"
            animate={{
              y: isHovered ? 0 : 100,
              x: isHovered ? 0 : 18
            }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.div>

          {/* Description - Only visible when hovered */}
          {description && (
            <motion.div 
              className="text-white text-center mt-4 text-lg z-20 max-w-[250px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20
              }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );

  // Return either a Link wrapper or just the card content
  if (link) {
    return (
      <a 
        href={link} 
        className="block no-underline hover:no-underline cursor-pointer" 
        onClick={onClick}
      >
        <CardContent />
      </a>
    );
  }

  // If there's an onClick but no link, make it a clickable div
  if (onClick) {
    return (
      <div 
        className="block cursor-pointer" 
        onClick={onClick}
      >
        <CardContent />
      </div>
    );
  }

  // Default: just return the card content
  return <CardContent />;
}