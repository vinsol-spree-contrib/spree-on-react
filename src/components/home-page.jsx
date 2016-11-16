import React, { Component } from 'react';

import FilterBar from './filter-bar';
import ProductList from './product-list';

class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="home-page row">
          <div className="col-md-3">
            <FilterBar />
          </div>
          <div className="col-md-9">
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
