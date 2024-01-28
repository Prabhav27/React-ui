import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Header.css"
import { HashLink } from 'react-router-hash-link'
import {AiOutlineMenu} from 'react-icons/ai'



const Header=({menuOpen,setMenuOpen})=> {
  return (
    <>
    <nav className='navbar'>
    <NavContent  setMenuOpen={setMenuOpen}/>
    </nav>

    <button className="navBtn" onClick={()=>setMenuOpen(!menuOpen)}>
<AiOutlineMenu/>
</button>
    </>
  );
};

const NavContent=({setMenuOpen})=>(
<>

      <div className="heading">
      PRABHAV.
      </div>
      
      <div className="navitems" >
      <HashLink onClick={() => setMenuOpen(false)} className="nvv" to="/#Home">Home</HashLink>
      <HashLink onClick={() => setMenuOpen(false)}  className="nvv nvvx" to="/#About">About</HashLink>
      <Link onClick={() => setMenuOpen(false)} className="nvv nvvx" to="/Services">Services</Link>
      <HashLink onClick={() => setMenuOpen(false)} className="nvv nvvx"  to="/#Brands">Brands</HashLink>
      <Link onClick={() => setMenuOpen(false)} className="nvv nvvx"  to="/Contact">Contact</Link>
      </div>
</>
);




export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Header;
