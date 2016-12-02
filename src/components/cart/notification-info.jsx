import React, { Component } from 'react';
import { Link } from 'react-router';

class CartNotificationInfo extends Component {
  render() {
    let cartLabel = '(Empty)';

    if (this.props.lineItems.length > 0) {
      cartLabel = `${ this.props.lineItems.length } Item`;
    }

    return (
      <div id="navbar">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/cart">
              <span className="glyphicon glyphicon-shopping-cart">
              </span>
              &nbsp;
              Cart:
              &nbsp;
              { cartLabel }
            </Link>
          </li>
        </ul>
      </div>
    );
  };
};

export default CartNotificationInfo;
