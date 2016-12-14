import React, { Component } from 'react';
import BrandHeader from './brand-header';
import FilterBarConnector from '../containers/taxon-filters/filter-bar-connector';
import CartNotificationInfoConnector from '../containers/cart/notification-info-connector';
import SearchBlock from './search-block';

class Header extends Component {

  componentDidUpdate(nextProps, nextState) {
    this.props.fetchTaxons(this.props.taxons);
  };

  navIcons () {
    return <dl className="nav-icons pull-right">
              <dd className='icon-block user-link-block'>
                <a className="primary-link"><span className="glyphicon glyphicon-user"></span>Login</a>
                <a className="primary-link"><span className="glyphicon glyphicon-lock"></span>SignUp</a>
              </dd>
              <CartNotificationInfoConnector />
              <SearchBlock />
           </dl>
  };

  render() {
    var navicons = this.navIcons();
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <BrandHeader />
          {navicons}
          <div className="navbar-collapse collapse">
            <FilterBarConnector />
          </div>
        </div>
      </nav>        
    );
  };
};

export default Header;
