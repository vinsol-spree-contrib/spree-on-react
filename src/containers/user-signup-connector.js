import { connect } from 'react-redux';

import UserSignUp from '../components/user-signup';
import Actions from '../actions';
import UserAPI from '../apis/user';

function mapDispatchToProps(dispatch) {
	return {
    submitSignupForm: (formData) => {
      dispatch(Actions.displayLoader());

      let signupPromise =  UserAPI.signup(formData);

      signupPromise.then((response) => {
        dispatch(Actions.hideLoader());
        dispatch(Actions.login(response.body));
        dispatch(Actions.showFlash('Successfully registered'));
      },
      (error) => {
        dispatch(Actions.showFlash('There was a problem in registration', 'danger'));
        dispatch(Actions.logout());
        dispatch(Actions.hideLoader());
      });

      return signupPromise;
    }
  };
}

const UserSignupConnector = connect(null, mapDispatchToProps)(UserSignUp);

export default UserSignupConnector;
