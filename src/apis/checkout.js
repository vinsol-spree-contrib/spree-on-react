var request = require('superagent');
import CommonAPIMethods from './common-api-methods';

const CheckoutAPI = {
  next: (orderNumber, orderToken, params={}) => {
    params.order_token = orderToken;

    return request
      .put(`${process.env.REACT_APP_API_BASE}/checkouts/${orderNumber}/next`)
      .set('Accept', 'application/json')
      .send(params);
  },

  update: (orderNumber, apiToken, params = {}) => {
    // let tokenParam = CommonAPIMethods.getTokenParams({ token: apiToken });

    return request
      .put(`${process.env.REACT_APP_API_BASE}/checkouts/${orderNumber}`)
      .query({ token: apiToken })
      .set('Accept', 'application/json')
      .send(params);
  }
}

export default CheckoutAPI;
