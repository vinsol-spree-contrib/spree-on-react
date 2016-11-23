import APP_ACTIONS from '../constants/app-actions';

const loader = {
  displayLoader: () => {
    return {
      type: APP_ACTIONS.DISPLAY_LOADER,
    };
  },

  hideLoader: () => {
    return {
      type: APP_ACTIONS.HIDE_LOADER,
    }
  }
};

export default loader;
