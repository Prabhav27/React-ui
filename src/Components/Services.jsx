import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from "../Assets/3.jpg";
import img2 from "../Assets/4.jpg";
import img3 from "../Assets/laptop.jpg";
import img4 from "../Assets/Hacker.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Styles/Services.css"

export default function Services() {
  return (
    <>
    <div className="services">
<Carousel   infiniteLoop
        autoPlay
        showStatus={false}
        showThumbs={false}
        interval={1000}>
    <div>
        <img src={img1} alt="" />
       
    </div>
    <div>
        <img src={img2} alt="" />
       
    </div>
    <div>
        <img src={img3} alt="" />
       
    </div>
    <div>
        <img src={img4} alt="" />
       
    </div>

</Carousel>
    </div>
    </>
  )
}
