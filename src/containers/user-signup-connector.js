import { connect } from 'react-redux';

import UserSignUp from '../components/user-signup';
import Actions from '../actions';
import UserAPI from '../apis/user';

function mapDispatchToProps(dispatch) {
	return {
    submitSignupForm: (formData) => {
      dispatch(Actions.displayLoader());

      let loginPromise =  UserAPI.signup(formData)

      loginPromise.then((response) => {
        dispatch(Actions.hideLoader());
        dispatch(Actions.showFlash('Successfully registered in'));
      },
      (error) => {
        dispatch(Actions.showFlash('Invalid email or password.', 'danger'));
        dispatch(Actions.logout());
        dispatch(Actions.hideLoader());
      })

      return loginPromise;
    }
  };
}

const UserSignupConnector = connect(null, mapDispatchToProps)(UserSignUp);

export default UserSignupConnector;