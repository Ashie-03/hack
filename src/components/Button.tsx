import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ButtonOutline from "../assets/ButtonOutline.svg";
import ButtonOutlineFilled from "../assets/ButtonOutlineFilled.svg";

interface ButtonProps {
  text: string;
  link?: string;
  bg?: boolean;
  heading?: boolean;
  clickSoundSrc?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  link, 
  bg = false, 
  heading = false,
  clickSoundSrc = "../assets/hoverSound.mp3"
}) => {
  const isExternal = link?.startsWith("http");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [soundLoaded, setSoundLoaded] = useState(false);

  useEffect(() => {
    const audio = new Audio(clickSoundSrc);
    audio.addEventListener("canplaythrough", () => setSoundLoaded(true));
    audio.load();
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [clickSoundSrc]);

  const playSound = (e: React.MouseEvent) => {
    // Don't stop the navigation
    if (audioRef.current && soundLoaded && link) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.error("Error playing sound:", e));
    }
  };

  const buttonContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={link ? { opacity: 0.6 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative flex items-center justify-center w-[180px] h-[36px] sm:w-[220px] sm:h-[42px] md:w-[300px] md:h-[40px] lg:w-[360px] lg:h-[50px] p-2 ${
        !link ? "cursor-default opacity-50" : "cursor-pointer"
      }`}
      onClick={playSound}
    >
      {/* SVG Background (Toggles based on bg prop) */}
      <img
        src={bg ? ButtonOutlineFilled : ButtonOutline}
        alt="Button Outline"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        style={{
          transform: heading ? "scale(1.3)" : "none",
        }}
      />
      {/* Text - Adjusted for smaller screens */}
      <div className="flex items-center justify-center w-full h-full z-10 p-10">
        <h2 className="font-forum text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-[#FADE78] whitespace-nowrap">
          {text}
        </h2>
      </div>
    </motion.div>
  );

  return link ? (
    isExternal ? (
      <a href={link} target="_blank" rel="noopener noreferrer" onClick={playSound}>
        {buttonContent}
      </a>
    ) : (
      <a href={link} onClick={playSound}>
        {buttonContent}
      </a>
    )
  ) : (
    buttonContent
  );
};

export default Button;