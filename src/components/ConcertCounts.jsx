import React from 'react'
import './ConcertCounts.css'
import CountUp from 'react-countup'
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

function ConcertCounts() {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <div className="concertCounts">
        <div className="circlesContainer">

        <div className="circle-counts">
            <h6>Days</h6>
            <h1>{counterOn &&<CountUp start={0} end={120} duration={2} delay={0}/>}</h1>
        </div>
        <div className="circle-counts">
            <h6>Hours</h6>
            <h1>{counterOn &&<CountUp start={0} end={69} duration={2} delay={0}/>}</h1>
        </div>
        <div className="circle-counts">
            <h6>Min</h6>
            <h1>{counterOn &&<CountUp start={0} end={49} duration={2} delay={0}/>}</h1>
        </div>
        <div className="circle-counts">
            <h6>Sec</h6>
            <h1>{counterOn &&<CountUp start={0} end={59} duration={2} delay={0}/>}</h1>
        </div>

        </div>
        
    </div>
    </ScrollTrigger>
  )
}

export default ConcertCounts