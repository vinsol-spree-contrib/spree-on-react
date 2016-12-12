import React, { Component } from 'react';

import Layout from '../layout';
import OrderPanelView from './panel-view';

class OrderList extends Component {

  componentDidMount() {
    this.props.loadOrders();
  };

  render() {
    let orderListMarkup = this.props.orders.map((order, idx) => {
      return (<OrderPanelView order={ order } key={ idx } />);
    });

    return (
      <Layout>
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
