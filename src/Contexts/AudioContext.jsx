import React, { createContext, useContext, useState, useRef } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [volume, setVolume] = useState(50); // Volume state

  const playNewAudio = (audioRef) => {
    if (currentAudio && currentAudio.current !== audioRef.current) {
      currentAudio.current.pause(); // Pause the currently playing audio
      currentAudio.current.currentTime = 0; // Reset its time
    }

    audioRef.current.volume = volume / 100; // Set the audio volume
    audioRef.current.play();
    setCurrentAudio(audioRef);
    setIsPlaying(true);
  };

  const stopCurrentAudio = () => {
    if (currentAudio) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0; // Reset its time
      setIsPlaying(false);
    }
  };

  const updateVolume = (newVolume) => {
    setVolume(newVolume);
    if (currentAudio) {
      currentAudio.current.volume = newVolume / 100;
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        playNewAudio,
        stopCurrentAudio,
        volume,
        updateVolume
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => useContext(AudioContext);
