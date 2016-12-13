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
        <div className="order-list-page">
          <div className="big-box-heading secondary spacing">
            Your Orders
          </div>
          <div className="row">
            <div className="order-list container dark-color">
              { orderListMarkup }
            </div>
          </div>
        </div>
      </Layout>
    );
  };
};

export default OrderList;
