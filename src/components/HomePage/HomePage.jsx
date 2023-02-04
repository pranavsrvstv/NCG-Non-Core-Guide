import React from 'react'
import './HomePage.css';
import flag from '../../assets/flag.png'
import './HomePage.css'
import Network from '../../assets/Network.png'

const CustomButton = ({ title }) => {
    return (
        <button type='button' style={{
            backgroundColor: 'white', height: "2rem", width: '5rem', borderRadius: '0.4rem'
            , border: '2px solid gray', color: "black", marginBottom: "0.3rem"
        }}>
            {title}
        </button>
    );

}
const HomePage = () => {
    return (
        <div className='app_homepage'>
            <div className='app_homepage_heading'>
                <img src={Network} alt="Network image" style={{width:'60px',height:'60px',margin:'0.5rem'}} />
                <span >NCG- Non Core Guide</span> 
            </div>
            <div className='app_homepage_aboutus'>

                <div className='app_homepage_containers'>
                    <CustomButton title="About Us" />
                    <p style={{ padding: "4px", textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos hic non natus odio autem nostrum provident nulla, obcaecati veniam.</p>
                </div>

                <div style={{width:"2rem",height:"2px",backgroundColor:"white"}}></div>
                <div className='hompage_flag_container'>

                    <img className="app_homepage_flag" src={flag} alt="" />
                </div>
            </div>
            <div className='app_homepage_content'>
                
                <div className='hompage_flag_container'>

                    <img className="app_homepage_flag" src={flag} alt="" />
                </div>


                <div style={{width:"2rem",height:"2px",backgroundColor:"white"}}></div>

                <div className='app_homepage_containers'>
                <CustomButton title="Content" />
                
                    <p style={{ padding: "4px", textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos hic non natus odio autem nostrum provident nulla, obcaecati veniam.</p>
                </div>

            </div>
            <div className='app_homepage_contribute'>
                <div className='app_homepage_containers' style={{marginBottom:'3rem'}}>
                    <CustomButton title="Contribute" />
                    <p style={{ padding: "4px", textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos hic non natus odio autem nostrum provident nulla, obcaecati veniam.</p>
                </div>

                <div style={{width:"2.3rem",height:"2px",backgroundColor:"white"}}></div>
                <div className='hompage_flag_container'>
                    <img className="app_homepage_flag" src={flag} alt="" />
                </div>

            </div>



        </div>
    )
}

export default HomePage
