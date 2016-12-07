var request = require('superagent');

const StateAPI = {
  getByCountry: (countryId) => {
    return request
      .get(`${process.env.REACT_APP_API_BASE}/states`)
      .query({ per_page: 300, country_id: countryId })
      .set('Accept', 'application/json')
      .send()
      .then(
        (response) => {
          return response;
        }
      );
  }
}

export default StateAPI;
