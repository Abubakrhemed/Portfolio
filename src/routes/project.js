import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import Work from '../Components/Work'



const project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS" text="Some of my most rececnt works"/>
      <Work/>
    
   
      <Footer/>
    </div>
  )
}

export default project