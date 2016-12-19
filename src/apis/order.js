var request = require('superagent');
import CommonAPIMethods from './common-api-methods';

const OrdersAPI = {
  getItem: (params) => {
    // let tokenParam = CommonAPIMethods.getTokenParams(params);

    return request
      .get(`${process.env.REACT_APP_API_BASE}/orders/${ params.orderNumber }`)
      .query({ token: params.apiToken })
      .set('Accept', 'application/json')
      .send();
  },

  mine: (apiToken) => {
    // let tokenParam = CommonAPIMethods.getTokenParams( { api_token: apiToken } );

    return request
      .get(`${process.env.REACT_APP_API_BASE}/orders/mine`)
      .query({ token: apiToken })
      .set('Accept', 'application/json')
      .send();
  },

  create: (apiToken) => {
    return request
      .post(`${process.env.REACT_APP_API_BASE}/orders`)
      .query({ token: apiToken })
      .set('Accept', 'application/json')
      .send();
  },

  destroy: (params) => {
    // let tokenParam = CommonAPIMethods.getTokenParams(params);

    return request
      .put(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/empty`)
      .query({ token: params.apiToken })
      .set('Accept', 'application/json');
  },

  update: (orderNumber, apiToken, params = {}) => {
    // let tokenParam = CommonAPIMethods.getTokenParams({ order_token: orderToken });

    return request
      .put(`${process.env.REACT_APP_API_BASE}/orders/${orderNumber}`)
      .query({ token: apiToken })
      .set('Accept', 'application/json')
      .send(params);
  }
}

export default OrdersAPI;
