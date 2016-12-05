import React, { Component } from 'react';
import { Link } from 'react-router';

class CartNotificationInfo extends Component {
  render() {
    let cartLabel = `${ this.props.lineItems.length }`;

    return (
      <Link to="/cart">
        <dd className="icon-block cart-icon-block withbg">
          <span className="badge">{ cartLabel }</span>
          <span className="glyphicon glyphicon-shopping-cart"></span>
        </dd>
      </Link>

    );
  };
};

export default CartNotificationInfo;
