"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, toggle }) => {
  return createPortal(
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white py-8 px-6 xs:px-10 sm:px-16 rounded-lg shadow-2xl text-center space-y-8">
        <p className="font-light text-lg">Do you like to play the background music?</p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggle}
            className="px-6 py-3 bg-green-500/80 hover:bg-green-500 text-white rounded-lg transition-colors backdrop-blur-sm border border-green-400/30"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-500/80 hover:bg-gray-500 text-white rounded-lg transition-colors backdrop-blur-sm border border-gray-400/30"
          >
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("my-modal")
  );
};

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);

  // Removed setBodyMusicClass to prevent affecting home component styling

  const handleFirstUserInteraction = () => {
    const musicConsent = localStorage.getItem("musicConsent");
    if (musicConsent === "true" && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    ["click", "keydown", "touchstart"].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    );
  };

  useEffect(() => {
    const consent = localStorage.getItem("musicConsent");
    const consentTime = localStorage.getItem("consentTime");

    if (
      consent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date()
    ) {
      setPermissionGranted(true);
      setIsPlaying(consent === "true");

      if (consent === "true") {
        ["click", "keydown", "touchstart"].forEach((event) =>
          document.addEventListener(event, handleFirstUserInteraction)
        );
      }
    } else {
      setShowModal(true);
    }
  }, []);

  const handlePermissionGranted = (granted) => {
    setShowModal(false);
    setPermissionGranted(true);
    localStorage.setItem("musicConsent", String(granted));
    localStorage.setItem("consentTime", new Date().toISOString());
    
    if (granted) {
      setIsPlaying(true);
      // Try to play immediately
      if (audioRef.current) {
        audioRef.current.play().catch(console.error);
      }
    } else {
      setIsPlaying(false);
    }
  };

  const toggle = () => {
    const newState = !isPlaying;
    setIsPlaying(!isPlaying);
    newState ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem("musicConsent", String(newState));
    localStorage.setItem("consentTime", new Date().toISOString());
  };
  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && (
        <Modal 
          onClose={() => handlePermissionGranted(false)} 
          toggle={() => handlePermissionGranted(true)} 
        />
      )}

      <audio ref={audioRef} loop>
        <source src="/src/assets/audio/birds39-forest-20772.mp3" type="audio/mpeg" />
        your browser does not support the audio element.
      </audio>
      
     
      
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="sound-glass-button w-12 h-12 xs:w-16 xs:h-16 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-3 xs:p-4 hover:scale-110 transition-all duration-300"
        aria-label={"Sound control button"}
        name={"Sound control button"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent transition-colors duration-300"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent transition-colors duration-300"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
