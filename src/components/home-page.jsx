import React, { Component } from 'react';

import FilterBarConnector from '../containers/taxon-filters/filter-bar-connector';
import ProductList from './product-list';
import Loader from './loader';
import Layout from './layout';

class HomePage extends Component {

  componentDidMount() {
    this.props.triggerInitialSetup(this.props.router.location.pathname);
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
                <ProductList productList={ this.props.products }
                             loadMore={this.props.loadMore}
                             pageCount={this.props.pageCount}
                             currentPage={this.props.currentPage} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default HomePage;
