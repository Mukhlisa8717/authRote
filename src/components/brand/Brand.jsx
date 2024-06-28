import React from 'react'
import './Brand.scss'
import appleWatch from '../../assets/appleWatch.png'
import xiomiWatch from '../../assets/xiomiWatch.png'
import fitbitWatch from '../../assets/fitbitWatch.png'

const Brand = () => {
  return (
    <section className="brand">
      <div className="container">
        <ul className="brand__list">
          <li className="brand__list-item">
            <img src={appleWatch} alt="apple watch" />
            <div className="brand__list-item-content">
              <h2>Apple</h2>
              <p>
                Apple is one of the most famous smart watches providing company.
              </p>
            </div>
          </li>
          <li className="brand__list-item">
            <img src={xiomiWatch} alt="xiomi watch" />
            <div className="brand__list-item-content">
              <h2>Xiaomi</h2>
              <p>Xiaomi smart watches are produced by MI company.</p>
            </div>
          </li>
          <li className="brand__list-item">
            <img src={fitbitWatch} alt="FitBit watch" />
            <div className="brand__list-item-content">
              <h2>FitBit</h2>
              <p>
                FitBit smart watches are best for there health and fitness
                features.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Brand
