import React from 'react'
import './GanaCardsSection.css'
import GanaCard from './GanaCard'

function GanaCardsSection() {
  return (
    <>
    <div className="GanaCardsSection">
    <GanaCard h5='Grow your audience on social network with Music' img='/Images/GanaCard1.webp'/>
    <GanaCard h5='Hello world!' img='/Images/Background.webp'/>
    <GanaCard h5='Trending Song audience on social network with Music' img='/Images/GanaCard3.webp'/>
    </div>
    </>
  )
}

export default GanaCardsSection