import React from 'react'
import './MainSection.css'

function MainSection() {
  return (
    <>
    

    <div className="mainSec">
      <div className="secHeadings">
      <h1 style={{color:'white'}}>Rock N'</h1>
      <h1 style={{color:'white'}}>Roll Rende</h1>
      <h1 style={{color:'white'}}>Zvous</h1>
      {/* Buttons  */}
    <div className="buttonContainer">
      <button className='ticket-btn'>Buy Ticket Now</button>
      <button className='musicfest-btn'>MUSIC FESTIVAL 2023</button>
    </div>
      </div>
      <img src="/Images/Musician.png" alt="" />
    </div>
    
    
    
    </>
  )
}

export default MainSection