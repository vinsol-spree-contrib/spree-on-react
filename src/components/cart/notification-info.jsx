import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles/notification-info.scss';

import APP_ROUTES from '../../constants/app-routes';

class CartNotificationInfo extends Component {
  render() {
    // <dd className="icon-block cart-icon-block withbg">
    return (
      <dd className={ styles.headerCartBlock }>
        <Link to={ APP_ROUTES.cartPageRoute } className={ "link-icon-elem elem " + styles.headerCartLink }>
          <span className={ "glyphicon glyphicon-shopping-cart " + styles.headerCartIcon }></span>
          <span className="hidden-xs">Cart</span>
          <span className={ "badge " + styles.headerCartCount }>{ this.props.lineItems.length }</span>
        </Link>
      </dd>

    );
  };
};

export default CartNotificationInfo;
