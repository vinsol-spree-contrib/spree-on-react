import React, { Component } from 'react';

import FilterBarConnector from '../containers/filter-bar-connector';
import FlashConnector from '../containers/flash-connector';
import ProductList from './product-list';
import Loader from './loader';

class HomePage extends Component {

  componentDidMount() {
    this.props.triggerInitialSetup();
  }

  render() {
    return (
      <div className="home-page row">
        <FlashConnector />
        <Loader displayLoader={this.props.displayLoader} />
        <div className="col-md-3">
          <FilterBarConnector />
        </div>
        <div className="col-md-9">
            <ProductList productList={ this.props.products }
                         loadMore={this.props.loadMore} />
        </div>
      </div>
    );
  }
};

export default HomePage;
