import React from 'react'
import homeimg from "./images/home.jpg"
import './Home.css'
import Product from './Product'
import iphone from './images/iphone.jpg'
import mixer from './images/kitchen_mixer.jpg'
import watch from './images/watch.jpg'
import alexa from './images/alexa.jpg'
import backpack from './images/backpack.jpg'
import laptop from './images/laptop.jpg'

function Home() {
    return (
        <div className="home">
            <img className="home_image" src={homeimg} alt="homeimg" />
            <div className="home_row">
                <Product
                    id="1"
                    title='Samsung Galaxy M31 (Iceberg Blue, 6GB RAM, 128GB Storage)'
                    price={309.99}
                    rating={4}
                    image={iphone}
                />
                <Product
                    id="2"
                    title='Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, (6.5QT, Blue)'
                    price={139.99}
                    rating={3}
                    image={mixer}
                />
            </div>
            <div className="home_row">
            <Product
                    id="3"
                    title='Advanced Health Monitoring, Fitness Tracking, and Long Lasting Battery - Mystic Silver (US Version)'
                    price={199.66}
                    rating={5}
                    image={watch}
                />
                <Product
                    id="4"
                    title='All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Twilight Blue'
                    price={109.99}
                    rating={4}
                    image={alexa}
                />
                <Product
                    id="5"
                    title='UGRACE Vintage Laptop Backpack with USB Charging Port, Elegant Water Resistant Travelling Backpack'
                    price={23.99}
                    rating={5}
                    image={backpack}
                />
            </div>
            <div className="home_row">
            <Product
                    id="6"
                    title='Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display'
                    price={1000.99}
                    rating={4}
                    image={laptop}
                />
            </div>
        </div>

    )
}

export default Home
