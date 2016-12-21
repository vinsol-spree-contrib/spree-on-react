var request = require('superagent');
import SpreeAPIOrderAdapter from './ams-adapters/spree-api-order-adapter';

const CheckoutAPI = {
  next: (orderNumber, orderToken, params={}) => {
    params.order_token = orderToken;

    return request
      .put(`${process.env.REACT_APP_AMS_API_BASE}/checkouts/${orderNumber}/next`)
      .set('Accept', 'application/json')
      .send(params)
      .then((response) => {
        if (JSON.parse(process.env.REACT_APP_PARSE_AMS_RESPONSE)) {
          let processedResponse = SpreeAPIOrderAdapter.processItem(response.body);
          response.body = processedResponse;
        }

        return response;
      });
  },

  update: (orderNumber, apiToken, params = {}) => {
    // let tokenParam = CommonAPIMethods.getTokenParams({ token: apiToken });

    return request
      .put(`${process.env.REACT_APP_AMS_API_BASE}/checkouts/${orderNumber}`)
      .query({ token: apiToken })
      .set('Accept', 'application/json')
      .send(params)
      .then((response) => {
        if (JSON.parse(process.env.REACT_APP_PARSE_AMS_RESPONSE)) {
          let processedResponse = SpreeAPIOrderAdapter.processItem(response.body);
          response.body = processedResponse;
        }

        return response;
      });
  }
}

export default CheckoutAPI;
