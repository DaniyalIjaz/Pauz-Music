import React from 'react'
import './Eventbtn.css'

function Eventbtn(props) {
  return (
    <>
     <div className='eventbtn'>

            <h4>{props.h4}</h4>
            <h3>{props.h3}</h3>
        </div>
    </>
  )
}

export default Eventbtn