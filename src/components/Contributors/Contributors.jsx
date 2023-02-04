import React from 'react'
import ContributorData from '../../data/ContributorData'
import './Contributors.css'
const ContriButton=({imgUrl,title})=>{
    return(
    <div className='contributton_icon'>
        <img src={imgUrl} alt="contributtonImage" />
        <p>{title}</p>
    </div>
    );
}
const Contributors = () => {
  return (
    <div className='app_contributors'>
         <div className='contributor_navbar_separation'></div>
         <p className='contributor_heading'>Our Contributors</p>
        <div className='app_contributors_container'>
       
        {ContributorData.map((element)=>
            <ContriButton imgUrl={element.imgUrl} title={element.name} key={element.name}/>)}
        </div>
      
    </div>
  )
}

export default Contributors
