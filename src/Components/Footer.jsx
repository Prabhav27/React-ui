import React from 'react';
import "../Styles/Footer.css"
import 'boxicons'
import { HashLink } from 'react-router-hash-link';
export default function Footer() {
  return (
    <>
    <footer className='footer'>
        <div className="footercontent">
        <div className="footertext">
    COPYRIGHT © 2024 <span >PRABHAV BAKLIWAL</span> | ALL RIGHTS RESERVED.
        </div>
        <div className="social-media">
            <a href="mailto:prabhavbakliwal27@gmail.com"><i className='bx bxl-gmail' ></i></a>
            <a href="https://www.linkedin.com/in/prabhav-bakliwal-cse/" target="_blank"><i className='bx bxl-linkedin-square' ></i></a>
            <a href="https://github.com/Prabhav27" target="_blank"><i className='bx bxl-github' ></i></a>
            <a href="https://www.instagram.com/prabhav_2710/" target="_blank"><i className='bx bxl-instagram' ></i></a>
            <a href="https://www.facebook.com/profile.php?id=100076419183945" target="_blank"><i className='bx bxl-facebook-circle'></i></a>
        </div>
        <div className="uparrow">
        <HashLink to="/#Home">
        <i className="bx bx-up-arrow-alt"></i>
        </HashLink>
        </div>
        </div>
    </footer>
    </>
  )
}
