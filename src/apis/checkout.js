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

  update: (orderNumber, orderToken, params = {}) => {
    let tokenParam = CommonAPIMethods.getTokenParams({ order_token: orderToken });

    return request
      .put(`${process.env.REACT_APP_API_BASE}/checkouts/${orderNumber}`)
      .query(tokenParam)
      .set('Accept', 'application/json')
      .send(params);
  }
}

export default CheckoutAPI;
