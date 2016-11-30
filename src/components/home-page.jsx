import React, { Component } from 'react';

import FilterBarConnector from '../containers/filter-bar-connector';
import ProductList from './product-list';
import Loader from './loader';
import Layout from './layout';

class HomePage extends Component {
  componentDidMount() {
    this.props.triggerInitialSetup();
  }

  render() {
    return (
      <Layout>
        <div className="home-page row">
          <Loader displayLoader={this.props.displayLoader} />
          <div className="col-md-3">
            <FilterBarConnector />
          </div>
          <div className="col-md-9">
            <ProductList productList={ this.props.products } />
          </div>
        </div>
      </Layout>
    );
  }
};

export default HomePage;
