var request = require('superagent');

const TaxonomyAPI = {
  getList: () => {
    var apiDomain = process.env.REACT_APP_API_DOMAIN
    return request
      .get(`http://${apiDomain}/api/v1/taxonomies`)
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
