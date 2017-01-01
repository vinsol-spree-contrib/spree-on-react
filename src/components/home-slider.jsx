import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
import Banner1 from '../images/banner1.jpg';
import Banner2 from '../images/banner2.jpg';


class HomeSlider extends Component {

  render () {
    return (
      <Carousel className="home-top-slider">
        <Carousel.Item style={{ backgroundImage: `url(${Banner1})` }}>
          <div className="banner-block">
            <div className="banner-title">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ backgroundImage: `url(${Banner2})` }}>
          <div className="banner-block">
            <div className="banner-title">
              <h3>Second slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default HomeSlider;
