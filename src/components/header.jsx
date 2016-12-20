import React, { Component } from 'react';
import { Link } from 'react-router';

import BrandHeader from './brand-header';
import FilterBarConnector from '../containers/taxon-filters/filter-bar-connector';
import CartNotificationInfoConnector from '../containers/cart/notification-info-connector';
import SearchBlock from './search-block';
import UserLoginConnector  from '../containers/user-login-connector';

class Header extends Component {

  componentDidUpdate(nextProps, nextState) {
    this.props.fetchTaxons(this.props.taxons);
  };

  constructor(props) {
    super(props);

    this.state = { showModal: false };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  };

  openModal() {
    this.setState({ showModal: true });
  };

  closeModal() {
    this.setState({ showModal: false });
  };

  navIcons () {
    let userSessionActionMarkup;
    let { user } = this.props;

    if (this.props.user.id) {
      userSessionActionMarkup = <dd className='icon-block user-link-block'>
        <a className="primary-link" onClick={ this.props.logout }>
          <span className="glyphicon glyphicon-user"></span>
          SignOut
        </a>
      </dd>;
    }
    else {
      userSessionActionMarkup = <dd className='icon-block user-link-block'>
        <a className="primary-link" onClick={ this.openModal }>
          <span className="glyphicon glyphicon-user"></span>
          Login
        </a>
      </dd>;
    }

    return <dl className="nav-icons pull-right">
              { this.props.user.id &&
                <dd className='icon-block'>
                  { `Hello, ${ user.email }, ` }
                  <Link to="/orders">
                    <span className="glyphicon glyphicon-user"></span>
                    Your Orders
                  </Link>
                </dd>
              }
              { userSessionActionMarkup }

              <CartNotificationInfoConnector />
              <UserLoginConnector showModal={ this.state.showModal } closeModal={ this.closeModal } />
              <SearchBlock />
           </dl>;
  };

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <BrandHeader />
          { this.navIcons() }
          <div className="navbar-collapse collapse row">
            <FilterBarConnector />
          </div>
        </div>
      </nav>
    );
  };
};

export default Header;
