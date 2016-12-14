import React, { Component } from 'react';
import BrandHeader from './brand-header';
import FilterBarConnector from '../containers/taxon-filters/filter-bar-connector';
import CartNotificationInfoConnector from '../containers/cart/notification-info-connector';
import SearchBlock from './search-block';
import UserForm  from './user-form';
import UserLoginForm  from './user-login';
import UserSignupForm  from './user-signup';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      defaultForm: true
    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.toggle = this.toggle.bind(this)
    this.openLogin = this.openLogin.bind(this)
    this.openSignup = this.openSignup.bind(this)
  }

  open() {
    this.setState({showModal: true});
  };

  close() {
    this.setState({showModal: false});
  };

  toggle() {
    this.setState({defaultForm: !this.state.defaultForm});
  };

  openLogin() {
    this.setState({
      defaultForm: true,
      showModal: true
    });
  };

  openSignup() {
    this.setState({
      defaultForm: false,
      showModal: true
    });
  }

  navIcons () {
    return <dl className="nav-icons pull-right">
              <dd className='icon-block user-link-block'>
                <a className="primary-link" onClick={this.openLogin}><span className="glyphicon glyphicon-user"></span>Login</a>
                <a className="primary-link" onClick={this.openSignup}><span className="glyphicon glyphicon-lock"></span>SignUp</a>
              </dd>
              <CartNotificationInfoConnector />
              
              <SearchBlock />

              <UserForm close={this.close} showModal={this.state.showModal}>
                { this.state.defaultForm ? <UserLoginForm defaultForm={this.state.defaultForm} toggle={this.toggle} /> : <UserSignupForm defaultForm={this.state.defaultForm} toggle={this.toggle} /> }
              </UserForm>

           </dl>
  }

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
  }
}

export default Header;
