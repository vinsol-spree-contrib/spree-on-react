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
  }
};

export default flash;
