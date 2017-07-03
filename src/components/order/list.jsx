import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

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
    if (this.props.user.id) {
      this.props.loadOrders(this.props.user.token).then((response) => {
        this.setState({ displayLoader: false });
      });
    }
    else {
      this.props.handleUserNotLoggedIn();
    }
  };

  render() {
    let orderListMarkup = this.props.orders.map((order, idx) => {
      return (<OrderPanelView order={ order } key={ idx } />);
    });

    return (
      <Layout>
        <Loader displayLoader={ this.state.displayLoader } />
        <div className="order-list-page order-section">
          <div className="container">
            <div className="section-heading">
              <FormattedMessage
                id="com.order--list.yourOrders"
                defaultMessage="Your Orders"
              />
            </div>
            <div className="order-list dark-color">
              { orderListMarkup }
            </div>
          </div>
        </div>
      </Layout>
    );
  };
};

export default OrderList;
