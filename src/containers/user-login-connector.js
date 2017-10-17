import { connect } from 'react-redux';

import UserLogin from '../components/user-login';
import Actions from '../actions';
import UserAPI from '../apis/user.js';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitLoginForm: (formData) => {
      dispatch(Actions.displayLoader());

      let loginPromise =  UserAPI.login(formData)

      loginPromise.then((response) => {
        dispatch(Actions.hideLoader());
        dispatch(Actions.login(response.body));
        dispatch(Actions.showFlash('Successfully logged in'));
      },
      (error) => {
        dispatch(Actions.showFlash('Invalid email or password.', 'danger'));
        dispatch(Actions.logout());
        dispatch(Actions.hideLoader());
      })

      return loginPromise;
    }
  };
};

const UserLoginConnector = connect(mapStateToProps, mapDispatchToProps)(UserLogin);

export default UserLoginConnector;
