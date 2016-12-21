import APP_ACTIONS from '../constants/app-actions';

const flash = {
  setFlash: (message, type) => {
    return {
      type: APP_ACTIONS.SET_FLASH,
      payload: {
        message,
        type,
        visible: true
      }
    }
  },

  hideFlash: () => {
    return {
      type: APP_ACTIONS.HIDE_FLASH
    }
  },

  /* This method displays the flash message for +timeoutInMillis+
      and then hides it.
  */
  showFlash: (message, type = 'success', timeoutInMillis = 5000) => {
    return (dispatch, getState) => {
      dispatch (flash.setFlash(message, type));

      setTimeout( () => {
          dispatch (flash.hideFlash())
        },
        timeoutInMillis );
    }
  }
};

export default flash;
