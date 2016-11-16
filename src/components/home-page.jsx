import React, { Component } from 'react';

import FilterBar from './filter-bar';
import ProductList from './product-list';
import Actions from '../actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    };
  }

  componentDidMount() {
    let productList = Actions.fetchProducts();

    this.setState({
      productList: productList
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="home-page row">
          <div className="col-md-3">
            <FilterBar />
          </div>
          <div className="col-md-9">
            <ProductList productList={ this.state.productList } />
          </div>
        </div>
      </div>
    );
  }
};

export default HomePage;
