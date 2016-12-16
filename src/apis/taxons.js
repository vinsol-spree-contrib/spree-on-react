var request = require('superagent');

const TaxonAPI = {
  getList: () => {
    return request
      .get(`${ process.env.REACT_APP_API_BASE }/taxons`)
      .set('Accept', 'application/json');
  }
}

export default TaxonAPI;
