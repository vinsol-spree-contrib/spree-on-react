import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import BrandHeader from './header/brand-header';
import FilterBarConnector from '../../containers/taxon-filters/filter-bar-connector';
import CartNotificationInfoConnector from '../../containers/cart/notification-info-connector';
import SearchFormConnector from '../../containers/search-form-connector';
import UserLoginConnector  from '../../containers/user-login-connector';
import UserSignupConnector from '../../containers/user-signup-connector';
import styles from './styles/header.scss';

class Header extends Component {

  componentDidUpdate(nextProps, nextState) {
    this.props.fetchTaxons(this.props.taxons);
  };

  constructor(props) {
    super(props);

    this.state = { showLoginModal: false, showSignUpModal: false };

    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);

    this.closeSignUpModal = this.closeSignUpModal.bind(this);
    this.openSignUpModal = this.openSignUpModal.bind(this);
  };

  openLoginModal() {
    this.setState({ showLoginModal: true });
  };

  closeLoginModal() {
    this.setState({ showLoginModal: false });
  };

  openSignUpModal() {
    this.setState({ showSignUpModal: true });
  };

  closeSignUpModal() {
    this.setState({ showSignUpModal: false });
  };

  navIcons () {
    let userSessionActionMarkup;
    let { user } = this.props;

    if (this.props.user.id) {
      userSessionActionMarkup = <dd className={ "icon-block user-link-block " + styles.headerUserBlock }>
        <DropdownButton title={ `Hello, ${ user.email.split('@')[0] } ` } className={ "btn-link " + styles.headerUserButton } bsStyle='link' id='user-account-dropdown'>
          <MenuItem onClick={ this.props.goToUserOrders }>
            <FormattedMessage
              id="com.header.menu.myOrders"
              defaultMessage="My Orders"
            />
          </MenuItem>
          <MenuItem eventKey="2" onClick={ this.props.logout }>
            <FormattedMessage
              id="shared.signOut"
              defaultMessage="Sign Out"
            />
          </MenuItem>
        </DropdownButton>
      </dd>;
    }
    else {
      userSessionActionMarkup = <dd className={ 'hidden-xs icon-block user-link-block ' + styles.headerUserBlock }>
        <div className="row">
          <div className="col-sm-4">
            <a href="#" className={ "primary-link " + styles.headerUserLink } onClick={ this.openLoginModal }>
              <FormattedMessage
                id="shared.login"
                defaultMessage="Login"
              />
            </a>
          </div>
          <div className="col-sm-8">
            <a href="#" className={ "primary-link " + styles.headerUserLink } onClick={ this.openSignUpModal }>
              <FormattedMessage
                id="shared.signUp"
                defaultMessage="SignUp"
              />
            </a>
          </div>
        </div>
      </dd>;
    }

    return <dl className={ "nav-icons " + styles.headerNavHolder }>
              <div className="row">
                <div className="col-sm-6">
                  <CartNotificationInfoConnector />
                </div>
                <div className="col-sm-6">
                  { userSessionActionMarkup }
                </div>
                
              </div>
              <UserLoginConnector showModal={ this.state.showLoginModal } closeModal={ this.closeLoginModal } />
              <UserSignupConnector showModal={this.state.showSignUpModal} closeModal={this.closeSignUpModal} />
           </dl>;
  };

  render() {
    let userLoggedInClass = this.props.user.id ? 'user-logged-in ' : 'guest-user ';
    return (
      <nav className={ "global-header " +  userLoggedInClass + styles.header}>
        <div className="container">
          <div className={ "row " + styles.headerTop }>
            <div className="col-sm-8">
              <div className="row">
                <div className="col-sm-6">
                  <div className="row">
                    <div className={ "col-sm-12 col-xs-8 " + styles.globalHeaderLogo }>
                      <BrandHeader />
                    </div>
                    <div className="col-xs-4 visible-xs text-right">
                      <a href="#" className={ "glyphicon glyphicon-menu-hamburger " + styles.headerMobileMenu }></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={ "col-sm-4 text-right " + styles.headerTopNav }>
              <div className="row">
                <div className="col-xs-9 visible-xs">
                  <SearchFormConnector />
                </div>
                <div className="col-sm-12 col-xs-3">
                  { this.navIcons() }
                </div>
              </div>
            </div>
          </div>

          <div className={ "row hidden-xs " + styles.headerBottomNavRow }>
            <div className={ "col-md-8 col-sm-7 " + styles.headerMainNavHolder }>
              <div className="navbar-collapse collapse row">
                <FilterBarConnector />
              </div>
            </div>
            <div className="col-md-4 col-sm-5">
              <SearchFormConnector />
            </div>
          </div>
        </div>
      </nav>
    );
  };
};

export default Header;
