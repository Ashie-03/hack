import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="w-full h-[500px] bg-gradient-to-b from-[#121212] to-[#5B0000] flex flex-col items-center justify-end gap-[50px] p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* First Div */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h5 className="text-[#FADE78] font-cinzel text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold">
          Designed & Developed By
        </h5>
        <p className="text-white font-forum text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
          <a
            href="https://x.com/Ashie__03"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Ashwini Ravikumar
          </a>
        </p>
      </motion.div>

      {/* Second Div */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h5 className="text-[#FADE78] font-cinzel text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold">
          Created With
        </h5>
        <p className="text-white font-forum text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
          <a
            href="https://bolt.new/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Bolt.new
          </a>
        </p>
        <p className="text-white font-forum text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
          <a
            href="https://figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Figma
          </a>
        </p>
        <p className="text-white font-forum text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
          <a
            href="https://freepik.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Freepik
          </a>
        </p>
        <p className="text-white font-forum text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            ChatGPT
          </a>
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
