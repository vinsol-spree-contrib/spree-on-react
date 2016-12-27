import React, { Component } from 'react';

import BrandHeader from './header/brand-header';
import FilterBarConnector from '../../containers/taxon-filters/filter-bar-connector';
import CartNotificationInfoConnector from '../../containers/cart/notification-info-connector';
import SearchFormConnector from '../../containers/search-form-connector';
import UserLoginConnector  from '../../containers/user-login-connector';
import { DropdownButton, MenuItem } from 'react-bootstrap';

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
        <DropdownButton title={ `Hello, ${ user.email.split('@')[0] } ` } className='btn-link' bsStyle='link' id='user-account-dropdown'>
          <MenuItem onClick={ this.props.goToUserOrders }>Your Orders</MenuItem>
          <MenuItem eventKey="2" onClick={ this.props.logout }>SignOut</MenuItem>
        </DropdownButton>
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

              { userSessionActionMarkup }

              <CartNotificationInfoConnector />
              <UserLoginConnector showModal={ this.state.showModal } closeModal={ this.closeModal } />
              <SearchFormConnector />
           </dl>;
  };

  render() {
    let userLoggedInClass = this.props.user.id ? 'user-logged-in ' : 'guest-user ';
    return (
      <nav className={"navbar navbar-inverse navbar-fixed-top " +  userLoggedInClass}>
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
