var request = require('superagent');

const TaxonAPI = {
  getList: () => {
    let apiBase = process.env.REACT_APP_API_BASE;
    return request
      .get(`${apiBase}/taxons`)
      .set('Accept', 'application/json')
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return { taxons: [] };
        }
      );
  }
}

export default TaxonAPI;
