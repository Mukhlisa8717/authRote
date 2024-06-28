import React from "react";
import "./Newsletter.scss";
import newsletterImg from "../../assets/newletterImg.png"

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__banner">
          <div className="newsletter__banner-content">
            <h2 className="title">Subscribe To Newsletter</h2>
            <p>Get free guide about smart watches daily. </p>
            <div className="newsletter__banner-content-inp">
              <input type="text" placeholder="Enter Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="newsletter__banner-image">
            <img src={newsletterImg} alt="watch" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
