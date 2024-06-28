import React from 'react'
import "./Heroimg.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
 <div className='hero'>
    <div className='mask'>
        <img  className='intro-img' 
        src={IntroImg} alt='IntroImg'/>
    </div>
    <div className='context'>
        <p> HI I'M A FRONTEND DEVELOPER.</p>
        <h1>React Developer.</h1>
        
        <Link to="/project" className='btn'>Projects</Link>
    <Link to="/contact" className='btn btn-light'>Contact</Link>
    </div>

 </div>
  )
}

export default Heroimg