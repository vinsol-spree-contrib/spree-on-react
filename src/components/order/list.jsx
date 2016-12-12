import React, { Component } from 'react';

import Layout from '../layout';
import OrderPanelView from './panel-view';
import Loader from '../shared/loader';

class OrderList extends Component {
  constructor(props){
    super(props);

    this.state = {
      displayLoader: true
    };
  };

  componentDidMount() {
    this.props.loadOrders().then((response) => {
      this.setState({ displayLoader: false });
    });
  };

  render() {
    let orderListMarkup = this.props.orders.map((order, idx) => {
      return (<OrderPanelView order={ order } key={ idx } />);
    });

    return (
      <Layout>
        <Loader displayLoader={ this.state.displayLoader } />
        <div className="order-list-page row">
          <div className="col-md-8 col-md-offset-2">
            <h1>
              Your Orders
            </h1>

            <div className="row order-list">
              <div className="col-md-12">
                { orderListMarkup }
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  };
};

export default OrderList;
