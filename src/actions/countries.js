import APP_ACTIONS from '../constants/app-actions';

const countries = {
  addCountries: (countriesResponse) => {
    return {
      type: APP_ACTIONS.ADD_COUNTRIES,
      payload: countriesResponse
    };
  }
};

export default countries;
