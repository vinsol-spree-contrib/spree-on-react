import { connect } from 'react-redux';

import Header from '../components/header';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const HeaderConnector = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderConnector;
