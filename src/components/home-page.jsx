import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import ProductList from './product-list';
import HomeSlider from './home-slider';
import Loader from './shared/loader';
import Layout from './layout';

class HomePage extends Component {

  componentDidMount() {
    this.props.triggerInitialSetup(this.props.router.location.pathname);
  };

  /* If home page icon is clicked. */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.routeParams.splat !== this.props.routeParams.splat) {
      this.props.triggerInitialSetup(this.props.router.location.pathname);
    }
  }

  render() {
    return (
      <Layout>
        <div className="home-page">
          <HomeSlider />
          <Loader displayLoader={ this.props.displayLoader } />

          <div className="container body-container">
            <h2 className="section-heading">
              <FormattedMessage
                id="com.home-page.heading"
                defaultMessage="Style Collection"
              />
            </h2>

            <ProductList products={ this.props.products }
                         loadMoreProducts={ this.props.loadMoreProducts }
                         pageCount={ this.props.pageCount } />
          </div>
        </div>
      </Layout>
    );
  };
};

export default HomePage;
