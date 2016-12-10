var request = require('superagent');

const OrdersAPI = {
  getItem: (params) => {
    return request
      .get(`${process.env.REACT_APP_API_BASE}/orders/${ params.orderNumber }`)
      .query({ order_token: params.orderToken })
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
    return request
      .put(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/empty`)
      .query({ order_token: params.orderToken })
      .set('Accept', 'application/json');
  },

  update: (orderNumber, orderToken, params = {}) => {
    params.order_token = orderToken;

    return request
      .put(`${process.env.REACT_APP_API_BASE}/checkouts/${orderNumber}`)
      .set('Accept', 'application/json')
      .send(params);
  }
}

export default OrdersAPI;
