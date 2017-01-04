import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
import Banner1 from '../images/coffee-images/Banner-1.jpg';
import Banner2 from '../images/coffee-images/Banner-2.jpeg';


class HomeSlider extends Component {

  render () {
    return (
      <Carousel className="home-top-slider">
        <Carousel.Item style={{ backgroundImage: `url(${Banner1})` }}>
          <div className="banner-block">
            <div className="banner-title">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ backgroundImage: `url(${Banner2})` }}>
          <div className="banner-block">
            <div className="banner-title">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default HomeSlider;
