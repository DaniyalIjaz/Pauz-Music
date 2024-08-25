import React, { useRef, useState, useEffect } from 'react';
import sound from '../assets/audio.mp3';
import './Playbar.css';

import playIcon from '/Images/Svgs/Play.svg';  
import pauseIcon from '/Images/Svgs/pause.svg';
import volumeIcon from '/Images/Svgs/Volume.svg';

import { useAudioContext } from '../Contexts/AudioContext';

function Playbar() {
  const audioRef = useRef(new Audio(sound));
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { isPlaying, playNewAudio, stopCurrentAudio, volume, updateVolume } = useAudioContext();

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
    if (isPlaying) {
      stopCurrentAudio();
    } else {
      playNewAudio(audioRef);
    }
  };

  const convertSecondsToMinutes = (seconds) => {
    if (isNaN(seconds) || seconds < 0) {
      return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    updateVolume(newVolume);
  };

  return (
    <>
    <div className="playbarContainer">
      <div className="artist-Details">
        <img src="/Images/Musician2.png" alt="" />
        <div className="artistDescriptions">
          <h3>Build Musicly</h3>
          <h4>Awesome Song</h4>
        </div>
      </div>

      <div className="songFunctionalities">
        <img 
          onClick={togglePlayPause} 
          src={isPlaying ? pauseIcon : playIcon} 
          alt={isPlaying ? "Pause" : "Play"} 
        />

        <div className="songtime">
          <p>{convertSecondsToMinutes(currentTime)}</p>
          <p>{convertSecondsToMinutes(duration)}</p>
        </div>

        <div className="volume">
          <label className="sliderr">
            <input 
              type="range" 
              className="level" 
              min="0" 
              max="100" 
              value={volume} 
              onChange={handleVolumeChange} 
            />
            <img src={volumeIcon} alt="Volume" />
          </label>
        </div>
      </div>

      <div className="favButton">
        <h4>Auto : Height </h4>
        <img src="/Images/Svgs/Heart.svg" alt="" />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="#8f8c8c" xmlns="http://www.w3.org/2000/svg">
          <path className='btn-svg' d="M14.8 18.4001H9.99996C9.66836 18.4001 9.39996 18.1317 9.39996 17.8001C9.39996 17.4685 9.66836 17.2001 9.99996 17.2001H14.8C15.7926 17.2001 16.6 16.3927 16.6 15.4001V4.6001C16.6 3.6075 15.7926 2.8001 14.8 2.8001H9.99996C9.66836 2.8001 9.39996 2.5317 9.39996 2.2001C9.39996 1.8685 9.66836 1.6001 9.99996 1.6001H14.8C16.4542 1.6001 17.8 2.9459 17.8 4.6001V15.4001C17.8 17.0543 16.4542 18.4001 14.8 18.4001ZM12.8242 9.5759L9.82416 6.5759C9.58976 6.3415 9.21016 6.3415 8.97576 6.5759C8.74136 6.8103 8.74136 7.1899 8.97576 7.4243L10.9516 9.4001H2.79995C2.46835 9.4001 2.19995 9.6685 2.19995 10.0001C2.19995 10.3317 2.46835 10.6001 2.79995 10.6001H10.9516L8.97576 12.5759C8.74136 12.8103 8.74136 13.1899 8.97576 13.4243C9.09296 13.5415 9.24636 13.6001 9.39996 13.6001C9.55356 13.6001 9.70696 13.5415 9.82416 13.4243L12.8242 10.4243C13.0586 10.1899 13.0586 9.8103 12.8242 9.5759Z" fill="#8f8c8c"></path>
        </svg>
      </div>
    </div>
  </>
  );
}

export default Playbar;
