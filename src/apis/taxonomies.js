var request = require('superagent');

const TaxonomyAPI = {
  getList: () => {
    let apiBase = process.env.REACT_APP_API_BASE;
    return request
      .get(`${apiBase}/taxonomies`)
      .set('Accept', 'application/json')
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return { taxonomies: [] };
        }
      );
  }
}

export default TaxonomyAPI;
