import React from 'react'
import homeimg from "./images/home.jpg"
import './Home.css'

function Home() {
    return (
        <div className="home">
           <img className="home_image" src={homeimg} alt="homeimg"/>
        </div>
    )
}

export default Home
