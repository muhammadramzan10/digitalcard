import React from 'react'
import "./card.css"

export default function Card(){
    return (
        <div className="main-container">
            <img src='img/mainImage.jpg' className='main-photo' alt='main' />
            <div className='info'>
                <div className='info-credentials'>
                    <h2>Ramzan Magsi</h2>
                    <p>Frontend Developer</p>
                    <p>Only Github</p>
                </div>
                <div className='info-social'>
                    <div className='email'>Email</div>
                    <div className='linkedin'>LinkedIn</div>
                </div>
                <div className='info-about'>
                    <div className='about-content'>
                        <h3>About</h3>
                        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    </div>
                    <div className='about-content'>
                        <h3>Interests</h3>
                        <p>Food expert. Music scholar. Reader. Internet fanatic. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}