import React from 'react'
import "../Styles/Home.css"
import vg from "../Assets/2.webp"
import home3vg from "../Assets/home2.png"
import home4vg from "../Assets/home4.png"
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";




export default function Home() {
  return (
    <>
    <div className="homehome">

    <div id="Home" className='home1'>
      <div className="dabba">

      <div className="headinghome">
        PRABHAV
      </div>
      <div className="caption">
        ONE STOP WEB SOLUTIONS
      </div>
      </div>
    </div>
    
    <div id="home2">
      <img className='home2img' src={home4vg} alt="" />
      <div className='home2div'>
        <p className='home2text'>With the expertise on Web Services, we professionally design, redesign and continuously support customer-facing and enterprise web solutions and achieve high conversion and adoption rates.</p>
      </div>
    </div>


    <div className="home3" id='About'>
<div className="home3content">

        <div className="home3heading">
          About Us
        </div>
        <div className="home3text">
        We have been building innovative web products for over 4 years. We deliver comprehensive web development services that use the most up-to-date tech innovations. Our expert developers can execute various project types, including customer-facing web apps, internal management portals, or even an e-commerce store with augmented reality features. Our unique focus is on delivering high-quality apps alongside a transparent and efficient development process.
        We've worked with leading companies in over 20 different industries. Our expertise has been built and refined over a decade of implementing the most advanced and up-to-date technologies for many of the web's best-known brands. We ensure that the most recent and efficient development tools are used to create your web app.
        </div>
      </div>
      <div className="home3img">

      <img className='home2img' src={home3vg} alt="" />
      </div>
</div>


<div className="home4" id="Brands">
<div className="home3img">

<img className='home2img' src={vg} alt="" />
</div>
  <div className="brands">
    <div className="home4heading">
      BRANDS
    </div>
    <div className="brandlogos">

    <div classname="logo" 
              style={{
                animationDelay: "0.3s",
              }}
              >
              <AiFillGoogleCircle />
              <p className='logos'>Google</p>
            </div>

            <div classname="logo" 
              style={{
                animationDelay: "0.5s",
              }}
              >
              <AiFillAmazonCircle />
              <p className='logos'>Amazon</p>
            </div>

            <div classname="logo"
              style={{
                animationDelay: "0.7s",
              }}
              >
              <AiFillYoutube />
              <p className='logos'>Youtube</p>
            </div>

            <div classname="logo"
              style={{
                animationDelay: "1s",
              }}
              >
              <AiFillInstagram />
              <p className='logos'>Instagram</p>
            </div>

    </div>
  </div>
</div>
              </div>
    </>
  )
}
