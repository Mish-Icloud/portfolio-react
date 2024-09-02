import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src="theme_pattern" alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Experienced in backend development and cybersecurity, I specialize in creating secure, scalable systems with a strong emphasis on data protection</p>
                <p>Driven by a passion for technology, I bring innovative solutions to complex problems, ensuring high-quality results in every project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{ width: "70%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{ width: "60%"}}/></div>
                <div className="about-skill"><p>PHP & LARAVEL</p><hr style={{ width: "50%"}}/></div>
                
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>4+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>20+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
