import React from 'react'
import './Footer.css';
import github from '../../assets/github.png';
import notion from '../../assets/notion.svg';

const Footer = () => {
  return (
    <div>
        <div className='footer_separation'></div>
    <div className='app_footer'>
       
        <div className='app_footer_contact'>
          
          <span><b>Pranav Shrivastava</b></span>
          <span>CivilEng. IIT BHU</span>
        </div>
        <div className='app_footer_copyright'>
        <span><b>Copyright 2023 @NCG-Non Core Guide</b></span>
        </div>
        <div className='app_footer_socialmedia_icons'>
            <img src={github} alt="githubimage" style={{width:'30px',height:'30px',marginRight:'1rem'}} />
            <img src={notion} alt="notion image"style={{width:'30px',height:'30px'}} />
        </div>
      
    </div>
    </div>
  )
}

export default Footer
