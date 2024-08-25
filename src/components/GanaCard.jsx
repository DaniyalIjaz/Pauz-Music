import React from 'react'
import './GanaCard.css'

function GanaCard(props) {
  return (
    <>
     <div className="ganaCard">
        <div className="company">
            <img src="/Images/Svgs/user.svg" alt="" />
            <p>Proffesionalconcept_123</p>
        </div>

        <div className="company">
            <img src="/Images/Svgs/comments.svg" alt="" />
            <p>Comments (0)</p>
        </div>

        <h5>{props.h5}</h5>

        <div className="companyImg">
            <img src={props.img} alt="" />
            <h6>24 AUG</h6>
        </div>

        <div className="rdmore">
            <h4>Read More</h4>
            <img className='rdmoreImg' src="/Images/Svgs/Arrow.svg" alt="" />
        </div>



     </div>
    </>
  )
}

export default GanaCard