import { connect } from 'react-redux';

import UserSignUp from '../components/user-signup';
import Actions from '../actions';

function mapDispatchToProps(dispatch) {

}

const userSignupConnecter = connect(null, mapDispatchToProps)(UserSignUp);

export default userSignupConnecter;