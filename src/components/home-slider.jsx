import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'

import Banner1 from '../images/b1.jpg';
import Banner2 from '../images/b2.jpg';

import styles from './styles/components/home-slider.scss';


class HomeSlider extends Component {

  render () {
    return (
      <Carousel className={ "homepage-slider " + styles.homeSlider }>
        <Carousel.Item className={ " " + styles.homeSliderRow } style={{ backgroundImage: `url(${Banner1})` }}>
          <div className={ "container " + styles.sliderContainer }>
            <div className={ "banner-block " + styles.homeSliderTextContent }>
              <div className="banner-title">
                <h3>Handpicked</h3>
                <p>
                  The best of global brands, at your doorstep!
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className={ " " + styles.homeSliderRow } style={{ backgroundImage: `url(${Banner2})` }}>
          <div className={ "container " + styles.sliderContainer }>
            <div className={ "banner-block " + styles.homeSliderTextContent }>
              <div className="banner-title">
                <h3>Shopaholic</h3>
                <p>
                  The end of reason sale!
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default HomeSlider;
