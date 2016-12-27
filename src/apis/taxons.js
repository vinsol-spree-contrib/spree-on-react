var request = require('superagent');
import SpreeAPITaxonAdapter from './ams-adapters/spree-api-taxon-adapter';

const TaxonAPI = {
  getList: () => {
    return request
      .get(`${ process.env.REACT_APP_AMS_API_BASE }/taxons`)
      .set('Accept', 'application/json')
      .then((response) => {
        let processedResponse = SpreeAPITaxonAdapter.processList(response.body);
        response.body = processedResponse;

        return response;
      });
  }
};

export default TaxonAPI;
