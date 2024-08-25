import React from 'react'
import './Ticketboxes.css'
import Ticketbox from './Ticketbox'

function Ticketboxes() {
  return (
    <>
    <div className="ticketboxes">
        <Ticketbox h3='One Day' h4='30 $'/>
        <Ticketbox h3='Two Day' h4='60 $'/>
        <Ticketbox h3='Three Day' h4='100 $'/>
    </div>
    </>
  )
}

export default Ticketboxes