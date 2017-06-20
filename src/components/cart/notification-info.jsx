import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles/notification-info.scss';

import APP_ROUTES from '../../constants/app-routes';

class CartNotificationInfo extends Component {
  render() {
    // <dd className="icon-block cart-icon-block withbg">
    return (
      <dd className={ styles.root }>
        <Link to={ APP_ROUTES.cartPageRoute } className="link-icon-elem elem"></Link>
        <span className="badge">{ this.props.lineItems.length }</span>
        <span className="glyphicon glyphicon-shopping-cart"></span>
      </dd>

    );
  };
};

export default CartNotificationInfo;
