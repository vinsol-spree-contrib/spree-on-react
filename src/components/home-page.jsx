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
        <div className="home-page row">
          <HomeSlider />
          <Loader displayLoader={ this.props.displayLoader } />

          <div className="big-box-heading">
            <FormattedMessage
              id="com.home-page.heading"
              defaultMessage="Style Collection"
            />
            <div className="icon-start">
              <div className="icon-arrow-hint animated-arrow-1 glyphicon glyphicon-chevron-down"></div>
              <div className="icon-arrow-hint animated-arrow-2 glyphicon glyphicon-chevron-down"></div>
            </div>
          </div>
          <ProductList products={ this.props.products }
                       loadMoreProducts={ this.props.loadMoreProducts }
                       pageCount={ this.props.pageCount } />
        </div>
      </Layout>
    );
  };
};

export default HomePage;
