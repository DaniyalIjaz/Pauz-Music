import React from 'react'
import './PlaylistSongs.css'
import SongComponent from './SongComponent'

function PlaylistSongs() {
  return (
   <>
    <div className="mainSongsBox">

        <div className="list">

            <div className="songRow">
                    <SongComponent img='/Images/Musician2.png' h3='Build Musicly' h4='Awesome Song'/>
                    <SongComponent img='/Images/SongPictures/Image-2.png' h3='life Of Pie' h4='Holy Studio'/>
            </div>
            <div className="songRow">
                    <SongComponent img='/Images/SongPictures/Image-3.png' h3='Love Is Blind' h4='Play Boy'/>
                    <SongComponent img='/Images/SongPictures/Image-4.png' h3='Napa Fashion' h4='Music Go'/>
            </div>
            <div className="songRow">
                    <SongComponent img='/Images/SongPictures/Image-5.png' h3='About Songs' h4='Ray Studio'/>
                    <SongComponent img='/Images/SongPictures/Image-6.png' h3='Something' h4='Ray Studio'/>
            </div>
            <div className="songRow">
                    <SongComponent img='/Images/SongPictures/Image-7.png' h3='Woo Albuu' h4='Vitae Studio'/>
                    <SongComponent img='/Images/SongPictures/Image-8.png' h3='Program Songs' h4='Olivia Rodrigo'/>
            </div>
            <div className="songRow">
                    <SongComponent img='/Images/SongPictures/Image-2.png' h3='Ninja Silhouette' h4='Holy Studio'/>
                    <SongComponent img='/Images/SongPictures/Image-5.png' h3='Happy Ninja' h4='Ray Studio'/>
            </div>


        </div>
        
        
        <video src="/Images/songVideo.mp4" autoPlay loop muted playsInline ></video>
        

    </div>
   </>
  )
}

export default PlaylistSongs