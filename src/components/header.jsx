import React, { Component } from 'react';
import BrandHeader from './brand-header';
import StoreNavigation from './store-navigation';
import CartBlock from './cart-block';
import SearchBlock from './search-block';

class Header extends Component {

  navIcons () {
    return <dl className="nav-icons pull-right">
              <dd className='icon-block user-link-block'>
                <a className="primary-link"><span className="glyphicon glyphicon-user"></span>Login</a>
                <a className="primary-link"><span className="glyphicon glyphicon-lock"></span>SignUp</a>
              </dd>
              <CartBlock />
              <SearchBlock />
           </dl>
  }

  render() {
    var navicons = this.navIcons();
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <BrandHeader />
          {navicons}
          <StoreNavigation />
        </div>
      </nav>
        
    );
  }
}

export default Header;
