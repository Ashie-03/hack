import { useEffect, useRef } from 'react';
import audio from '../assets/hoverSound.mp3';

const ClickSound: React.FC = () => {
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio element for click sound
    clickSoundRef.current = new Audio(audio);
    
    // Setup click sound handler for the entire document
    const handleClick = () => {
      if (clickSoundRef.current) {
        // Clone the audio node to allow multiple overlapping sounds
        const clickSound = clickSoundRef.current.cloneNode() as HTMLAudioElement;
        
        // Play the sound with error handling
        clickSound.play().catch(err => {
          console.error("Error playing click sound:", err);
        });
      }
    };
    
    // Add the click event listener to the document
    document.addEventListener('click', handleClick);
    
    // Clean up on component unmount
    return () => {
      document.removeEventListener('click', handleClick);
      clickSoundRef.current = null;
    };
  }, []);
  
  // This component doesn't render anything visible
  return null;
};

export default ClickSound;