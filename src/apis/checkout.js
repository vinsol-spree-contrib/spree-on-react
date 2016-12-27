var request = require('superagent');
import SpreeAPIOrderAdapter from './ams-adapters/spree-api-order-adapter';

const CheckoutAPI = {
  next: (orderNumber, params, formData={}) => {

    return request
      .put(`${process.env.REACT_APP_AMS_API_BASE}/checkouts/${orderNumber}/next`)
      .query(params)
      .set('Accept', 'application/json')
      .send(formData)
      .then((response) => {
        let processedResponse = SpreeAPIOrderAdapter.processItem(response.body);
        response.body = processedResponse;

        return response;
      });
  },

  update: (orderNumber, tokenParam, formData = {}) => {
    return request
      .put(`${process.env.REACT_APP_AMS_API_BASE}/checkouts/${orderNumber}`)
      .query(tokenParam)
      .set('Accept', 'application/json')
      .send(formData)
      .then((response) => {
        let processedResponse = SpreeAPIOrderAdapter.processItem(response.body);
        response.body = processedResponse;

        return response;
      });
  }
}

export default CheckoutAPI;
