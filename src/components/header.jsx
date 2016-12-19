import React, { Component } from 'react';
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

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  };

  openModal() {
    this.setState({ showModal: true });
  };

  closeModal() {
    this.setState({ showModal: false });
  };

  navIcons () {
    return <dl className="nav-icons pull-right">
              <dd className='icon-block user-link-block'>
                <a className="primary-link" onClick={ this.openModal }><span className="glyphicon glyphicon-user"></span>Login</a>
              </dd>
              <CartNotificationInfoConnector />

              <SearchBlock />

              <UserLoginConnector showModal={ this.state.showModal } closeModal={ this.closeModal } />

           </dl>;
  };

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <BrandHeader />
          { this.navIcons() }
          <div className="navbar-collapse collapse">
            <FilterBarConnector />
          </div>
        </div>
      </nav>        
    );
  };
};

export default Header;
