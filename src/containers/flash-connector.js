import { connect } from 'react-redux';

import Actions from '../actions';
import Flash from '../components/flash';

const mapStateToProps = (state, ownProps) => {
  let flash = {
    flash: {
      message: state.flash.message,
      type: state.flash.type,
      visible: state.flash.visible
    }
  }
  return flash
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFlash: (message, type) => {
      dispatch(Actions.setFlash(message, type));
    },

    hideFlash: () => {
      dispatch(Actions.hideFlash())
    }
  };
};

const FlashConnector = connect(mapStateToProps, mapDispatchToProps)(Flash);

export default FlashConnector;
