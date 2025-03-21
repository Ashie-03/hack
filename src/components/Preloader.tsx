import React, { useState, useEffect } from 'react';
import './PreloaderAnimation.css'; // We'll create this separately

interface PreloaderProps {
  onComplete: () => void;
}

const PreloaderAnimation: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [subTextVisible, setSubTextVisible] = useState(false);
  const [instructionVisible, setInstructionVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Timing for each element to fade in (in milliseconds)
  useEffect(() => {
    // Start the animation sequence
    setTimeout(() => setHeadingVisible(true), 500);
    setTimeout(() => setContentVisible(true), 1500);
    setTimeout(() => setNameVisible(true), 2500);
    setTimeout(() => setSubTextVisible(true), 3500);
    setTimeout(() => {
      setInstructionVisible(true);
      setAnimationComplete(true);
    }, 4500);
  }, []);

  // Handle click event to transition to main content
  const handleClick = () => {
    if (animationComplete) {
      onComplete();
    }
  };

  return (
    <div 
      className="preloader-container" 
      onClick={handleClick}
      style={{ 
        backgroundImage: 'url(../assets/Scroll.svg)', 
        backgroundSize: '40vw',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="preloader-content">
        <h1 className={`fade-element ${headingVisible ? 'visible' : ''}`}>
          A Call to Glory! 
        </h1>
        
        <p className={`fade-element ${contentVisible ? 'visible' : ''}`}>
          Bolt hath sworn to make history—100,000 souls united in the greatest hackathon ever! But to summon such a host, a prize of legend is needed—100,000 gold coins (or more… dare we?).

Who shall stand with us? Bring forth ideas, patrons, and bold visions! Reply, warriors, and let us ride to victory!
        </p>
        
        <h2 className={`fade-element ${nameVisible ? 'visible' : ''}`}>
          Eric Simons
        </h2>
        
        <p className={`fade-element ${subTextVisible ? 'visible' : ''}`}>
          King of The Bolt Kingdom
        </p>
        
        <p className={`fade-element instruction ${instructionVisible ? 'visible' : ''}`}>
          Click anywhere to continue
        </p>
      </div>
    </div>
  );
};

export default PreloaderAnimation;