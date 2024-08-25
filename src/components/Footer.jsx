import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
        <div className="footer">
          <div className="overlay">

         
            
            <img src="/Images/footer.png" alt="" />

            <div className="mainFooter">

              <div className="links">
                <h4>Discover</h4>
                <p>Editor’s Choice</p>
                <p>Popular Music</p>
                <p>New Release Songs</p>
                <p>Upcoming Music</p>
              </div>

              <div className="links">
                <h4>Helps And Faq</h4>
                <p>My Info Here</p>
                <p>Help Centre</p>
                <p>News & Blog</p>
                <p>Hire Us</p>
              </div>

              <div className="links">
                <h4>Meet Gana</h4>
                <p>About Gana</p>
                <p>Careers</p>
                <p>Privacy Policy</p>
                <p>Sitemap</p>
              </div>

              <div className="linkss">
                <h4>Subscribe Now</h4>
                <h5>Subscription our newsletter for get every update form gana</h5>
              
                <input placeholder="Enter your mail" className="inputt" name="text" type="text"/>
                
                  <div className="checkbos">
                      <label className="containerr">
                        <input type="checkbox"/>
                        <svg viewBox="0 0 64 64" height="2em" width="2em">
                          <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                        </svg>
                      </label>
                      <p>Agree with our terms & conditions</p>

                  </div>

              </div>

            </div>
            </div>
        </div>
    </>
  )
}

export default Footer