import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
import Banner1 from '../images/coffee-images/Banner-1.jpg';
import Banner2 from '../images/coffee-images/Banner-2.jpeg';

import styles from './styles/components/home-slider.scss';


class HomeSlider extends Component {

  render () {
    return (
      <Carousel className={ "homepage-slider " + styles.homeSlider }>
        <Carousel.Item className={ " " + styles.homeSliderRow } style={{ backgroundImage: `url(${Banner1})` }}>
          <div className={ "container " + styles.sliderContainer }>
            <div className={ "banner-block " + styles.homeSliderTextContent }>
              <div className="banner-title">
                <h3>Banner 1</h3>
                <p>Lorem ipsum doler set amet. Lorem ipsum doler set amet. Lorem ipsum doler set amet. Lorem ipsum doler set amet.</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className={ " " + styles.homeSliderRow } style={{ backgroundImage: `url(${Banner2})` }}>
          <div className={ "container " + styles.sliderContainer }>
            <div className={ "banner-block " + styles.homeSliderTextContent }>
              <div className="banner-title">
                <h3>Banner 2</h3>
                <p>Lorem ipsum doler set amet. Lorem ipsum doler set amet. Lorem ipsum doler set amet. Lorem ipsum doler set amet.</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default HomeSlider;
