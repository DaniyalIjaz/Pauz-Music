import React, { useRef, useState, useEffect } from 'react';
import anotherSound from '../assets/audio.mp3';
import './SongComponent.css';

import playIcon from '/Images/Svgs/Play.svg';  
import pauseIcon from '/Images/Svgs/pause.svg';

import { useAudioContext } from '../Contexts/AudioContext';

function SongComponent(props) {
  const audioRef = useRef(new Audio(anotherSound));
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { isPlaying, playNewAudio, currentAudio, stopCurrentAudio } = useAudioContext();

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
    <>
    <div className="songComponent" onClick={togglePlayPause}>

        <div className="artist-Detailss">

            <img src={props.img} alt="" />

            <div className="artistDescriptionss">
                <h3 className='artistDescriptionssh3'>{props.h3}</h3>
                <h4>{props.h4}</h4>
            </div>
            {/* /Images/Musician2.png */}

        </div>
        
        {/* <img 
            onClick={togglePlayPause} 
            src={isPlaying ? pauseIcon : playIcon} 
            alt={isPlaying ? "Pause" : "Play"} 
          /> */}

    </div>
    </>
  );
}

export default SongComponent;
