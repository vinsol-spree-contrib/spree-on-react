import React, { Component } from 'react';

import ProductList from './product-list';
import HomeSlider from './home-slider';
import Loader from './shared/loader';
import Layout from './layout';

class HomePage extends Component {

  componentDidMount() {
    this.props.triggerInitialSetup(this.props.router.location.pathname);
  }

  render() {
    return (
      <Layout>
        <div className="home-page row">
          <HomeSlider />
          <div className={this.props.displayLoader ? "product-loader" : 'hide'}>
            <Loader displayLoader={this.props.displayLoader} />
          </div>

          <div className="big-box-heading">
            Style Collection
            <div className="icon-start">
              <div className="icon-arrow-hint animated-arrow-1"></div>
              <div className="icon-arrow-hint animated-arrow-2"></div>
            </div>
          </div>
          <ProductList productList={ this.props.products }
                       loadMore={this.props.loadMore}
                       pageCount={this.props.pageCount}
                       currentPage={this.props.currentPage} />
        </div>
      </Layout>
    );
  }
};

export default HomePage;
