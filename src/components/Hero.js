import React from 'react'
import ProfileImage from '../assets/image.jpeg'
import '../style/Hero.css'


const Hero = () => {
  return (
    <section className='hero'>
        <img src ={ProfileImage} alt='profile'/>
        {/* <h1>Hello and welcome to my profile !!! i'm Shree Nidhi</h1> */}
        <p>WELCOME TO MY PORTFOLIO</p>
        <h1>Hi , I'm Shree Nidhi</h1>
        <h2>Aspiring Full Stack Developer</h2>
        <p>I'm a passionate Web Developer and Computer Science graduate who enjoys creating clean, responsive, and user-friendly websites. I love learning new technologies, solving problems, and turning ideas into meaningful digital experiences. I'm eager to grow my skills and contribute to exciting projects as I begin my professional journey.</p>
        <button>Dowload Resume</button>

    </section>
  )
}

export default Hero