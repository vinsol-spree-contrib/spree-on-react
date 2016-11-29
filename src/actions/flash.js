import APP_ACTIONS from '../constants/app-actions';

const flash = {
  addFlash: (message, type) => {
    return {
      type: APP_ACTIONS.ADD_FLASH,
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
