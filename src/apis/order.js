var request = require('superagent');
import CommonAPIMethods from './common-api-methods';

const OrdersAPI = {
  getItem: (params) => {
    let tokenParam = CommonAPIMethods.getTokenParams(params);

    return request
      .get(`${process.env.REACT_APP_API_BASE}/orders/${ params.orderNumber }`)
      .query(tokenParam)
      .set('Accept', 'application/json')
      .send();
  },

  mine: (apiToken) => {
    let tokenParam = CommonAPIMethods.getTokenParams( { api_token: apiToken } );

    return request
      .get(`${process.env.REACT_APP_API_BASE}/orders/mine`)
      .query(tokenParam)
      .set('Accept', 'application/json')
      .send();
  },

  create: () => {
    return request
      .post(`${process.env.REACT_APP_API_BASE}/orders`)
      .set('Accept', 'application/json')
      .send();
  },

  destroy: (params) => {
    let tokenParam = CommonAPIMethods.getTokenParams(params);

    return request
      .put(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/empty`)
      .query(tokenParam)
      .set('Accept', 'application/json');
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

export default OrdersAPI;
