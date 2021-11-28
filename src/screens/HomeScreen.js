import React from 'react'
import './HomeScreen.css';

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <div className="homescreen__greeting">
                <h2>Hello! My Name Is</h2>
            </div>
            <div className="homescreen__name">
                <h1>Ufere <span>Kalu</span></h1>
            </div>
            <div className="homescreen__border">
                <div></div>
            </div>
            <div className="homescreen__title">
                <h2>I am a Full Stack Developer</h2>
            </div>
        </div>
    )
}

export default HomeScreen;
