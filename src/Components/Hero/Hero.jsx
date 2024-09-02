import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Misheck_Munga__Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Misheck Munga,</span> Cybersecurity Engineer and Software Developer Based in Kenya. </h1>
      <p>A skilled Computer Science professional with strong foundation in hardware/software setup, cybersecurity analysis, and web development. With proficiency in PHP, Laravel, React.js, and cryptographic techniques, he excels in both backend and frontend development. Misheck is adept at troubleshooting technical issues, conducting security audits, and providing technical support to ensure seamless operations. His experience includes developing user-friendly interfaces, managing databases, and collaborating on IT solutions. A passionate learner, Misheck stays updated on the latest technologies and is committed to leveraging his skills to solve complex problems and enhance IT systems.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
        <a href={resume} download="Misheck_Munga__Resume.pdf" className='anchor-link'>My resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
