import React, { Component } from 'react';

import FilterBarConnector from '../containers/filter-bar-connector';
import ProductList from './product-list';
import HomeSlider from './home-slider';
import Loader from './loader';

class HomePage extends Component {
  componentDidMount() {
    this.props.triggerInitialSetup();
  }

  render() {
    return (
      <div className="home-page row">
        <HomeSlider />
        <div className={this.props.displayLoader ? "porduct-loader" : 'hide'}>
          <Loader displayLoader={this.props.displayLoader} />
        </div>
        <ProductList productList={ this.props.products } />
      </div>
    );
  }
};

export default HomePage;
