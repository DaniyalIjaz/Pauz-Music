
import './Navbar.css'

function Navbar(props) {
    
 const showMenu = ()=>{
    document.querySelector(".nav-links").style.display="block";
    document.querySelector(".left").style.display="none";
    document.querySelector(".navbar").style.height="100vh";
    // document.querySelector(".nav-links-ul").style.transform="translateY(10vh)"; 
    document.querySelector(".Hamburger").style.display="none"; 
    document.querySelector(".Cross").style.display="block"; 
    document.querySelector(".nav-links-ul li a").style.color="white"; 

 }
 const hideMenu = ()=>{
    document.querySelector(".nav-links").style.display="none";
    document.querySelector(".left").style.display="block";
    document.querySelector(".navbar").style.height="18vh";
    // document.querySelector(".nav-links-ul").style.transform="translateY(0)";
    document.querySelector(".Hamburger").style.display="block";
    document.querySelector(".Cross").style.display="none";
 }
  return (
    <>
    <div className="navbar" style={props.light} >
       
        <div className="left">
            
            <h1>Pauz</h1>

        {/* Search Bar */}
                <div className="container">
                        <input className="checkbox" type="checkbox"/> 
                        <div className="mainbox">
                            <div className="iconContainer">
                                <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="search_icon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                            </div>
                        <input className="search_input" placeholder="Search here" type="text"/>
                        </div>
                    </div>

        </div>
        
        <div className="right">
        


            {/* Navlinks  */}
            <div className="nav-links">
            <ul className='nav-links-ul'>
                <li><a className='navHover' href="#" >Home</a></li>
                <li><a className='navHover' href="#">About Us</a></li>
                <li><a className='navHover' href="#">Trending Song</a></li>
                <li><a className='navHover' href="#">Pages</a></li>
                <li><a className='navHover' href="#">Blog</a></li>
                <li><a className='navHover' href="#">Contact Us</a></li>
            </ul>
            </div>

            {/* Hamburger  */}
        <div className="Hamburger" onClick={showMenu}>

            <img src="/Images/Svgs/Hamburger.svg" alt="" />
            </div>
            <div className="Cross" onClick={hideMenu}>
                <img src="/Images/Svgs/Cross.svg" alt="" />
            </div>

            {/* Buttons  */}
            <div className="nav-buttons">
                {/* Dark mode button  */}
                <label className="switch">
                <input type="checkbox" onClick={props.toggleMode}/>
                <span className="slider">
                    <span className="circle">
                    <span className="shine shine-1"></span>
                    <span className="shine shine-2"></span>
                    <span className="shine shine-3"></span>
                    <span className="shine shine-4"></span>
                    <span className="shine shine-5"></span>
                    <span className="shine shine-6"></span>
                    <span className="shine shine-7"></span>
                    <span className="shine shine-8"></span>
                    <span className="moon"></span>
                    </span>
                </span>
                </label>
                {/* Join free button  */}
                    <button className="boton-elegante">Join Free

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                        <path className='btn-svg' d="M14.8 18.4001H9.99996C9.66836 18.4001 9.39996 18.1317 9.39996 17.8001C9.39996 17.4685 9.66836 17.2001 9.99996 17.2001H14.8C15.7926 17.2001 16.6 16.3927 16.6 15.4001V4.6001C16.6 3.6075 15.7926 2.8001 14.8 2.8001H9.99996C9.66836 2.8001 9.39996 2.5317 9.39996 2.2001C9.39996 1.8685 9.66836 1.6001 9.99996 1.6001H14.8C16.4542 1.6001 17.8 2.9459 17.8 4.6001V15.4001C17.8 17.0543 16.4542 18.4001 14.8 18.4001ZM12.8242 9.5759L9.82416 6.5759C9.58976 6.3415 9.21016 6.3415 8.97576 6.5759C8.74136 6.8103 8.74136 7.1899 8.97576 7.4243L10.9516 9.4001H2.79995C2.46835 9.4001 2.19995 9.6685 2.19995 10.0001C2.19995 10.3317 2.46835 10.6001 2.79995 10.6001H10.9516L8.97576 12.5759C8.74136 12.8103 8.74136 13.1899 8.97576 13.4243C9.09296 13.5415 9.24636 13.6001 9.39996 13.6001C9.55356 13.6001 9.70696 13.5415 9.82416 13.4243L12.8242 10.4243C13.0586 10.1899 13.0586 9.8103 12.8242 9.5759Z" fill="#ffffff"></path>
                    </svg>
                    </button>
                   
                    
               
            </div>


            
        </div>
    </div>
    </>
  )
}

export default Navbar