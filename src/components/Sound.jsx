"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import birdsAudio from "../assets/audio/birds39-forest-20772.mp3";

const CONSENT_KEY = "musicConsent";

const Modal = ({ onYes, onNo }) =>
  createPortal(
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white py-6 px-6 sm:px-10 rounded-2xl shadow-2xl text-center space-y-6 max-w-sm">
        <p className="font-light text-base sm:text-lg">
          Enable background music?
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={onYes}
            className="px-6 py-3 bg-green-500/80 hover:bg-green-500 text-white rounded-lg transition-colors border border-green-400/30"
          >
            Yes
          </button>
          <button
            type="button"
            onClick={onNo}
            className="px-6 py-3 bg-gray-500/80 hover:bg-gray-500 text-white rounded-lg transition-colors border border-gray-400/30"
          >
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("my-modal")
  );

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // On mount: decide what to do based on stored consent
  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);

    if (consent === null) {
      setShowModal(true);
      return;
    }

    if (consent !== "true") return;

    // Consent already granted — try autoplay; if blocked, start on next user gesture
    const tryPlay = () =>
      audioRef.current
        ?.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          const onGesture = () => {
            audioRef.current
              ?.play()
              .then(() => setIsPlaying(true))
              .catch(() => {});
            window.removeEventListener("pointerdown", onGesture);
            window.removeEventListener("keydown", onGesture);
            window.removeEventListener("touchstart", onGesture);
          };
          window.addEventListener("pointerdown", onGesture, { once: true });
          window.addEventListener("keydown", onGesture, { once: true });
          window.addEventListener("touchstart", onGesture, { once: true });
        });

    tryPlay();
  }, []);

  // The Yes click IS a user gesture — play() called synchronously here will succeed.
  const handleYes = () => {
    localStorage.setItem(CONSENT_KEY, "true");
    setShowModal(false);
    audioRef.current
      ?.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  const handleNo = () => {
    localStorage.setItem(CONSENT_KEY, "false");
    setShowModal(false);
    setIsPlaying(false);
  };

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem(CONSENT_KEY, "false");
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          localStorage.setItem(CONSENT_KEY, "true");
        })
        .catch(() => {});
    }
  };

  return (
    <div className="fixed top-[64px] sm:top-[84px] right-3 sm:right-4 z-40 group">
      {showModal && <Modal onYes={handleYes} onNo={handleNo} />}

      <audio ref={audioRef} loop preload="auto" src={birdsAudio} />

      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="sound-glass-button w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-40 p-2 sm:p-3 hover:scale-110 transition-all duration-300"
        aria-label="Sound toggle"
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
