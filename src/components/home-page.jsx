import React, { Component } from 'react';

import FilterBarConnector from '../containers/taxon-filters/filter-bar-connector';
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
          <div className="col-md-12">
            <Loader displayLoader={ this.props.displayLoader } />
            <div className="row">
              <div className="col-md-12">
                <FilterBarConnector />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ProductList productList={ this.props.products } />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default HomePage;
