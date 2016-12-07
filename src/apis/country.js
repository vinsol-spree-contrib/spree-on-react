var request = require('superagent');

const CountryAPI = {
  getList: () => {
    return request
      .get(`${process.env.REACT_APP_API_BASE}/countries`)
      .query({ per_page: 300 })
      .set('Accept', 'application/json')
      .send()
      .then(
        (response) => {
          return response;
        }
      );
  }
}

export default CountryAPI;
