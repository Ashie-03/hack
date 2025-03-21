import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Heading from "./components/Heading";
import Button from "./components/Button";
import JudgeCard from "./components/JudgeCard";
import ImageSlider from "./components/Carousel";
import MapMarker from "./components/MapMarker";
import Section from "./components/Section";
import VerticalTicker from "./components/Ticker";
import Footer from "./components/Footer";
import Parallax from "./components/Parallax";
import MapBg from "/src/assets/MapBg.jpg";
import ClickSound from './components/Audio';
import scrollImage from './assets/Scroll.svg';
import alex from "./assets/judges/Alex.png";
import sarah from "./assets/judges/Sarah.png";
import ben from "./assets/judges/Ben.png";
import evan from "./assets/judges/Evan.png";
import pieter from "./assets/judges/Pieter.png";
import theo from "./assets/judges/Theo.png";
import logan from "./assets/judges/Logan.png";
import greg from "./assets/judges/Greg.png";
import kp from "./assets/judges/KP.png";
import alliesFramer from "./assets/AlliesFrame.png";

function App() {
  // State to control the preloader visibility
  const [showPreloader, setShowPreloader] = useState(true);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [subTextVisible, setSubTextVisible] = useState(false);
  const [instructionVisible, setInstructionVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Start the animation sequence for preloader elements
  useEffect(() => {
    if (showPreloader) {
      setTimeout(() => setHeadingVisible(true), 500);
      setTimeout(() => setContentVisible(true), 1500);
      setTimeout(() => setNameVisible(true), 2500);
      setTimeout(() => setSubTextVisible(true), 3500);
      setTimeout(() => {
        setInstructionVisible(true);
        setAnimationComplete(true);
      }, 4500);
    }
  }, [showPreloader]);

  // Handle click to dismiss preloader
  const handlePreloaderClick = () => {
    if (animationComplete) {
      setShowPreloader(false);
    }
  };

  return (
    <>
      {showPreloader ? (
        // Preloader
<div 
  className="fixed inset-0 flex items-center justify-center z-50 cursor-pointer"
  onClick={handlePreloaderClick}
  style={{ 
    backgroundImage: `url(${scrollImage})`, 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '45vw',
    backgroundColor: '#121212'
  }}
>
          <div className="text-center max-w-[25%] pl-8 pr-4 pt-20">
            <h1 
              className={`text-2xl text-[#FADE78] font-bold mb-2 mt-8 transition-all duration-800 transform ${
                headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              A Call For Glory!
            </h1>
            
            <p 
              className={`text-md mb-8 text-black transition-all duration-800 transform ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Bolt hath sworn to make history—100,000 souls united in the greatest hackathon ever! But to summon such a host, a prize of legend is needed—100,000 gold coins (or more… dare we?).

Who shall stand with us? Bring forth ideas, patrons, and bold visions! Reply, warriors, and let us ride to victory!
            </p>
            
            <h2 
              className={`text-xl text-[#FADE78] font-semibold mb-4 transition-all duration-800 transform ${
                nameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Eric Simons
            </h2>
            
            <p 
              className={`text-md text-[#FADE78] mb-2 transition-all duration-800 transform ${
                subTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Emperor of The Bolt Kingdom
            </p>
            
            <p 
              className={`text-gray-400 italic mb-10 transition-all duration-800 transform ${
                instructionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Click anywhere to begin your adventure
            </p>
          </div>
        </div>
      ) : (
        // Main Website Content
        <div className="min-h-screen bg-[#121212] flex flex-col items-center overflow-hidden">
          {/* Hero Section with Parallax Background */}
          <div id="home" className="relative w-full min-h-screen flex items-center justify-start bg-black px-10 md:px-16 lg:px-24">
            {/* Parallax as Background */}
            <Parallax />

            {/* Hero Content on Left */}
            <div className="relative z-10 flex flex-col items-start justify-center">
              <Heading />

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-4 mt-6">
                  <Button text="Quests" link="#quests" />
                  <Button text="Rewards" link="#rewards" />
                  <Button text="Strategists" link="#judges" />
                  <Button text="Allies" link="#allies" />
                  <Button text="Sign Up" bg={true} textColor="text-white" link="https://form.typeform.com/to/wf94YwH4" />
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Quests Section */}
          <div id="quests" 
            className="relative w-full py-16 px-10 md:px-16 lg:px-24 h-[700px]"
            style={{ 
              backgroundImage: `url(${MapBg})`, 
              backgroundSize: "cover", 
              backgroundPosition: "center"
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-transparent to-[#121212] z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-start h-full">
              <Section buttonText="Quest Details" heading={true} />

              {/* Map Markers */}
              <div className="flex flex-wrap justify-center items-center mt-8">
                <div className="flex gap-12 md:gap-[200px]">
                  <MapMarker heading="Location" subheading="Virtual" />
                  <MapMarker heading="Date" subheading="TBD" />
                </div>
                <div className="w-full flex justify-center mt-2">
                  <MapMarker heading="Timings" subheading="TBD" />
                </div>
              </div>
            </div>
          </div>

          {/* Rewards Section */}
          <div id="rewards" className="w-full bg-[#121212] px-10 md:px-16 pt-[50px] lg:px-24">
            <Section 
              buttonText="Misson Rewards" 
              heading={true}
              description="Every great adventure comes with legendary rewards, and this hackathon is no different. Only the most daring, creative, and relentless challengers will claim these treasures. From gold-tier bounties to exclusive relics of recognition, each reward is a testament to the skill and vision of its bearer.

  Will you rise above the competition and etch your name into legend?"
            />
            <ImageSlider />
          </div>
          
          {/* Judges Section */}
          <div id="judges" className="w-full bg-[#121212] px-10 pt-[50px] md:px-16 lg:px-24">
            <Section 
              buttonText="Mission Strategists" 
              heading={true}
              description="In every great quest, there are legendary figures who guide the heroes toward victory. Our Mission Strategists are those masters—visionaries, innovators, and trailblazers in the tech realm. These elite strategists will evaluate projects based on innovation, execution, impact, and creativity, seeking solutions that push boundaries and redefine the future."
            />

            {/* Judge Cards Grid */}
            <div className="flex flex-wrap justify-center mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <JudgeCard 
                image={pieter}
                name="Pieter"
                description="This is a description for the judge. It will be displayed on the back of the card."
                link="https://x.com"
              />
              <JudgeCard 
                image={logan}
                name="Logan"
                description="This is a description for the judge. It will be displayed on the back of the card."
                link="https://x.com"
              />
              <JudgeCard 
                image={theo}
                name="Theo"
                description="This is a description for the judge. It will be displayed on the back of the card."
                link="https://x.com"
              />
              <JudgeCard 
                image={sarah}
                name="Sarah"
                description="This is a description for the judge. It will be displayed on the back of the card."
                link="https://x.com"
              />
              <JudgeCard 
                image={evan}
                name="Evan"
                description="This is a description for the judge. It will be displayed on the back of the card."
                link="https://x.com"
              />
              <JudgeCard 
                image={kp}
                name="KP"
                description="This is a description for the judge. It will be displayed on the back of the card."
                link="https://x.com"
              />
              <JudgeCard 
                image={alex}
                name="Alex"
                description="This is a description for the judge. It will be displayed on the back of the card."
                link="https://x.com"
              />
              <JudgeCard 
                image={ben}
                name="Ben"
                description="This is a description for the judge. It will be displayed on the back of the card."
                link="https://x.com"
              />
              <JudgeCard 
                image={greg}
                name="Greg"
                description="This is a description for the judge. It will be displayed on the back of the card."
                link="https://x.com"
              />
            </div>
          </div>

          {/* Allies Section */}
          <div id="allies" className="min-h-screen flex flex-col items-center justify-center relative pt-[300px] pb-[150px] px-4 gap-10">
            {/* Background Image */}
            <motion.img
              src={alliesFramer}
              alt="Allies Frame"
              className="absolute w-[80vw] h-[90vh] max-w-[600px] object-contain sm:h-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            {/* Section Component */}
            <div className="relative z-10 w-full max-w-[500px] sm:max-w-[400px] flex justify-center">
              <Section 
                buttonText="Our Allies" 
                heading={true}
                description="Every great adventure is backed by legendary forces. Our Allies—visionary companies and organizations— are the ones that fuel this journey. Their contribution makes this hackathon possible, providing the support needed to push boundaries and create the extraordinary."
                width="40vw"
              />
            </div>

            {/* Ticker Component */}
            <div className="w-[40vw] relative z-10">
              <VerticalTicker />
            </div>
          </div>

          {/* Footer Section */}
          <Footer />
          <ClickSound />
        </div>
      )}
    </>
  );
}

export default App;