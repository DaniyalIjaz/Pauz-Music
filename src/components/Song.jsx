// Song.js
import React, { useRef, useEffect } from 'react';
import './Song.css';
import sound from '../assets/audio.mp3';
import { useAudioContext } from '../Contexts/AudioContext';

function Song() {
  const audioRef = useRef(new Audio(sound));
  const {
    isPlaying,
    playNewAudio,
    stopCurrentAudio,
    currentAudio
  } = useAudioContext();

  useEffect(() => {
    const audio = audioRef.current;

    const updateCurrentTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateCurrentTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateCurrentTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying && currentAudio === audioRef.current) {
      stopCurrentAudio();
    } else {
      playNewAudio(audioRef);
    }
  };

  return (
    <div className="mainSong" onClick={togglePlayPause}>
      <div className="timeHeading">
        <h4>18:00 - 19:00 pm</h4>
        <h2>Harmonious Haven: A Jazz Soiree</h2>
      </div>
      <div className="songDetails">
        <div className="moreSongDetails">
          <div className="artistName">
            <h3>Trance Mix</h3>
            <h5>Dj Tom</h5>
          </div>
          <div className="concertLocation">
            <h3>New York</h3>
            <h5>Manhattan Club</h5>
          </div>
        </div>
        <button>
          <img src="./Images/Svgs/Arrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Song;
