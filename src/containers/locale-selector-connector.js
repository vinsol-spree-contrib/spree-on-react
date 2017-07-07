import { connect } from 'react-redux';

import Actions from '../actions';
import LocaleSelector from '../components/shared/header/locale-selector';

const mapStateToProps = (state, ownProps) => {
  return {
    currentLocale: state.currentLocale
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLocale: (locale) => {
      dispatch(Actions.setLocale(locale));
    }
  };
};

const LocaleSelectorConnector = connect(mapStateToProps, mapDispatchToProps)(LocaleSelector);

export default LocaleSelectorConnector;
