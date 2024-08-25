
import './App.css'
import MainSection from './components/MainSection'
import { useState } from 'react';
import Navbar from './components/Navbar'
import ConcertCounts from './components/ConcertCounts';
import InfiniteHeading from './components/InfiniteHeading';
import Song from './components/Song';
import Playbar from './components/Playbar';
import AlbumPictures from './components/AlbumPictures';
import Eventbtn from './components/Eventbtn';
import PlaylistSongs from './components/PlaylistSongs';
import Ticketboxes from './components/Ticketboxes';
import GanaArtistsSection from './components/GanaArtistsSection';
import ScrollOnTopButton from './components/ScrollOnTopButton';
import CarouselCard from './components/CarouselCard';
import GanaCardsSection from './components/GanaCardsSection';
import Footer from './components/Footer';
import PreLoader from './components/PreLoader';

import { AudioProvider } from './Contexts/AudioContext';




function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if (mode==='light') { 
      setMode('dark');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.querySelector('.navbar').style.backgroundColor = 'white';
      document.body.classList.add('no-white-hover');
      document.querySelector('.eventbtnnh4').style.color = 'white';
      document.querySelector('.eventbtnnh2').style.color = 'white';
      document.querySelector('.eventbtnnh22').style.color = 'white';
      document.querySelector('.artistDescriptionssh3').style.color = 'black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#0f0f0f';
      document.body.style.color = 'white';
      document.querySelector('.navbar').style.backgroundColor = '#0f0f0f';
      document.body.classList.remove('no-white-hover');
    }
  }

  // for playing song 
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  return (
    <AudioProvider>
      <PreLoader/>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <MainSection/>
      <ConcertCounts/>
      <InfiniteHeading/>

      <Song/>
      <Song/>
      <Song/>
      <Song/>
      <Song/>
        
      <AlbumPictures/>
      <Eventbtn h4='EVENT PLAYLIST' h3='Previous Event Playlist'/>
      <PlaylistSongs/>
      <Eventbtn h4='EVENT TICKET' h3='All Event Ticket'/>
      <Ticketboxes/>
      <Eventbtn h4='ARTISTS' h3='Top Gana Artists'/>
      <GanaArtistsSection/>
      <ScrollOnTopButton/>
      <CarouselCard/>
      <Eventbtn h4='TOP NEWS' h3='Gana Latest News'/>
      <GanaCardsSection/>
      <Footer/>

      <Playbar />
      

      
    </AudioProvider>
  )
}

export default App
