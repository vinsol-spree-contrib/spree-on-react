import React, { Component } from 'react';
import loaderImage from '../../images/loader.svg';

class Loader extends Component {
  render() {
    let loaderDiv = null;

    if (this.props.displayLoader) {
      loaderDiv = <div className="product-loader">
                    <div className="loading-block">
                      <img className='loader' src={ loaderImage } alt='Loader'/>
                    </div>
                  </div>;
    }

    return (
      loaderDiv
    );
  }
}

export default Loader;
