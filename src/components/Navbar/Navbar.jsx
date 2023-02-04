import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
const NavButton = ({ icon,title}) => (
  <button type='button' className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span  className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2">
        {title}
      </span>
      

    </button>
  
)

const Navbar = () => {
  return (
   <nav className="app_navbar">
    <div className='app_navbar_logo'>
      <img src={logo} alt="logo" />
      <span ><b>NCG</b>
      <p style={{fontSize:"10px",display:"flex", flexDirection:"column",justifyContent:"end",alignItems:"end", fontWeight:"400",marginBottom:"4px" ,marginLeft:"3px"} }>Non-core Guide</p></span>
      
    </div>
    <ul className='app_navbar_links'>
     <li className='app_navbar_links_items'><a href="">Roadmaps</a></li>
     <li className='app_navbar_links_items'><a href="">Resources</a></li>
     <li className='app_navbar_links_items'><a href="">Contacts</a></li>
     <li className='app_navbar_links_items'><a href="">Opportunities</a></li>
    </ul>

   </nav>
  )
}

export default Navbar;
