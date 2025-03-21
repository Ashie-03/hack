import React from "react";
import { motion } from "framer-motion";
import supabaseLogo from "../assets/logos/supabase.png";
import netlifyLogo from "../assets/logos/netlify.png";
import cloudflareLogo from "../assets/logos/cloudfare.png";
import sentryLogo from "../assets/logos/sentry.png";
import exaLogo from "../assets/logos/exa.png";
import loomLogo from "../assets/logos/loom.png";
import algorandLogo from "../assets/logos/algorand.png";
import hsrLogo from "../assets/logos/hsr.png";

const Logos = [
  { src: supabaseLogo, alt: "Supabase Logo" },
  { src: netlifyLogo, alt: "Netlify Logo" },
  { src: cloudflareLogo, alt: "Cloudflare Logo" },
  { src: sentryLogo, alt: "Sentry Logo" },
  { src: exaLogo, alt: "Exa Logo" },
  { src: loomLogo, alt: "Loom Logo" },
  { src: algorandLogo, alt: "Algorand Logo" },
  { src: hsrLogo, alt: "HSR Logo" },
];

const VerticalTicker = () => {
  return (
    <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-[#1d1d1d] before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-[#1d1d1d] after:to-transparent after:content-['']">
      <motion.div
        transition={{
          duration: 10,
          ease: 'linear',
          repeat: Infinity,
        }}
        initial={{ translateX: 0 }}
        animate={{ translateX: '-50%' }}
        className="flex flex-none gap-16 pr-16"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {Logos.map(({ src, alt }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                className="h-20 w-auto flex-none"
              />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default VerticalTicker;