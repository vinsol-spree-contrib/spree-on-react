var request = require('superagent');

const TaxonomyAPI = {
  getList: () => {
    return request
      .get('http://localhost:3001/api/v1/taxonomies')
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
