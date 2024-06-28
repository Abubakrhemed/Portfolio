import React from 'react';
import './Footerstyles.css';
import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p>Mississauga</p>
                            <p>Ontario</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4>
                            <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            647-514-9523
                        </h4>
                    </div>
                    <div className='email'>
                        <h4>
                            <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            abubakr.hemed@gmail.com
                        </h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About Me</h4>
                    <p>
                        I am a Front End Developer proficient in HTML, CSS, and JavaScript,
                        specializing in creating user-friendly interfaces and optimizing website performance.
                    </p>
                    <div className='social'>
                        <a href="https://github.com/Abubakrhemed" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        </a>
                    
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
