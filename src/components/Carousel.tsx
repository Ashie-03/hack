import { useState } from "react";
import { motion } from "framer-motion";
import level1 from "../assets/badges/Level-1.png";
import level2 from "../assets/badges/Level-2.png";
import level3 from "../assets/badges/Level-3.png";
import level4 from "../assets/badges/Level-4.png";
import level5 from "../assets/badges/Level-5.png";
import leftArrow from "../assets/arrows/LeftArrow.png"; 
import rightArrow from "../assets/arrows/RightArrow.png";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => 
      prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => 
      prevIndexes.map((prevIndex) => (prevIndex + 4) % 5) // Moving backwards
    );
  };

  const images = [
    { img: level1, title: "Rookie Explorer", subheading: "Prizes worth 100k", description: "You've taken your first step into the adventure." },
    { img: level2, title: "Skilled Seeker", subheading: "Prizes worth 200k", description: "You've proven yourself with greater challenges." },
    { img: level3, title: "Master Pathfinder", subheading: "Prizes worth 300k", description: "Your wisdom and experience shine through." },
    { img: level4, title: "Elite Challenger", subheading: "Prizes worth 400k", description: "You are among the best, facing the toughest obstacles." },
    { img: level5, title: "Legendary Conqueror", subheading: "Prizes worth 500k", description: "You've reached the pinnacle of greatness!" },
  ];

  const positions = ["center", "right1", "right", "left", "left1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3, opacity: 0.7 },
    left: { x: "-90%", scale: 0.5, zIndex: 2, opacity: 0.5 },
    right: { x: "90%", scale: 0.5, zIndex: 2, opacity: 0.5 },
    right1: { x: "50%", scale: 0.7, zIndex: 3, opacity: 0.7 },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      {/* Image Slider Container */}
      <div className="relative w-[40%] h-[350px] flex items-center justify-center">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute flex items-center justify-center text-center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          >
            {/* Image Container with Overlay Text */}
           <div className="relative w-[90%] max-w-[350px] sm:max-w-[90%] md:max-w-[75%] min-w-[250px] h-auto">
  <img src={image.img} alt={image.title} className="rounded-lg w-full h-auto" />

  {/* Overlay Text Inside Image */}
  <div className="absolute inset-0 flex flex-col items-center text-white px-4 justify-center pt-5">
    <h2 className="font-cinzel text-[#FADE78] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold text-center w-[90%] sm:w-[85%] md:w-[80%] leading-snug">
      {image.title}
    </h2>
    <h3 className="font-forum text-[#DAB74F] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center w-[90%] sm:w-[85%] md:w-[80%] mt-2 sm:mt-1 md:mt-0.5">
      {image.subheading}
    </h3>
    <p className="font-forum text-white/70 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[18px] text-center w-[90%] sm:w-[70%] md:w-[70%] mt-3 sm:mt-2 md:mt-1 leading-relaxed">
      {image.description}
    </p>
  </div>
</div>

          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows - Positioned Below the Images */}
      <div className="flex items-center justify-center gap-8 mt-6">
        <button onClick={handleNext}>
          <img src={leftArrow} alt="Previous" className="w-16 h-16" />
        </button>
        <button onClick={handleBack}>
          <img src={rightArrow} alt="Next" className="w-16 h-16" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
