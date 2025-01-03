import { useEffect, useState } from "react";
import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";

// Create a single audio instance that persists across renders
const audio = new Audio(sakura);
audio.volume = 0.4;
audio.loop = true;

const SoundButton = () => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  useEffect(() => {
    // Initial play attempt
    const initializeAudio = async () => {
      try {
        if (isPlayingMusic) {
          await audio.play();
        } else {
          audio.pause();
        }
      } catch (error) {
        console.log("Audio autoplay blocked:", error);
        setIsPlayingMusic(false);
      }
    };

    initializeAudio();

    // Cleanup function
    return () => {
      audio.pause();
    };
  }, []); // Run only once on mount

  const toggleSound = () => {
    if (isPlayingMusic) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
    setIsPlayingMusic(!isPlayingMusic);
  };

  // Sync state with actual audio state
  audio.onplay = () => setIsPlayingMusic(true);
  audio.onpause = () => setIsPlayingMusic(false);

  return (
    <div className='fixed bottom-2 left-2 z-50'>
      <img
        src={!isPlayingMusic ? soundoff : soundon}
        alt='sound'
        onClick={toggleSound}
        className='w-10 h-10 cursor-pointer object-contain hover:scale-105 transition-transform duration-300'
      />
    </div>
  );
};

export default SoundButton; 