import React from 'react'
import './Hero.scss'
import { IoSearch } from 'react-icons/io5';
import heroImg from "../../assets/heroImg.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__cont">
        <div className="hero__cont-left">
          <h1>Discover Most Suitable Watches</h1>
          <p>
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
          <div className="hero__cont-left-search">
            <IoSearch size={19} />
            <input type="text" placeholder="Find the best brands" />
            <button>Search</button>
          </div>
        </div>
        <div className="hero__cont-right">
          <img src={heroImg} alt="watch" />
        </div>
      </div>
    </section>
  );
}

export default Hero
