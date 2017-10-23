var request = require('superagent');
import SpreeAPIOrderAdapter from './ams-adapters/spree-api-order-adapter';

const OrdersAPI = {
  getItem: (params) => {
    return request
      .get(`${process.env.REACT_APP_AMS_API_BASE}/orders/${ params.orderNumber }`)
      .query(params.tokenParam)
      .set('Accept', 'application/json')
      .send()
      .then((response) => {
        let processedResponse = SpreeAPIOrderAdapter.processItem(response.body);
        response.body = processedResponse;

        return response;
      });
  },

  mine: (apiToken) => {
    return request
      .get(`${process.env.REACT_APP_AMS_API_BASE}/orders/mine`)
      .query({ token: apiToken, 'q[state_cont]': 'complete' })
      .set('Accept', 'application/json')
      .send()
      .then((response) => {
        let processedResponse = SpreeAPIOrderAdapter.processList(response.body);
        response.body = processedResponse;

        return response;
      });
  },

  create: (params) => {
    return request
      .post(`${process.env.REACT_APP_AMS_API_BASE}/orders`)
      .query(params)
      .set('Accept', 'application/json')
      .send()
      .then((response) => {
        let processedResponse = SpreeAPIOrderAdapter.processItem(response.body);
        response.body = processedResponse;

        return response;
      });
  },

  destroy: (params) => {
    return request
      .put(`${process.env.REACT_APP_AMS_API_BASE}/orders/${params.orderNumber}/empty`)
      .query(params.tokenParam)
      .set('Accept', 'application/json');
  },

  update: (orderNumber, tokenParam, params = {}) => {
    return request
      .put(`${process.env.REACT_APP_AMS_API_BASE}/orders/${orderNumber}`)
      .query(tokenParam)
      .set('Accept', 'application/json')
      .send(params)
      .then((response) => {
        let processedResponse = SpreeAPIOrderAdapter.processItem(response.body);
        response.body = processedResponse;

        return response;
      });
  },

  getCurrent: (userAPIToken) => {
    return request
      .get(`${process.env.REACT_APP_AMS_API_BASE}/orders/current`)
      .query({ token: userAPIToken })
      .set('Accept', 'application/json')
      .send()
      .then((response) => {
        /*
          Return response with empty body if no current order was found.
        */
        if (response.body === null) {
          return { body: {} };
        }

        let processedResponse = SpreeAPIOrderAdapter.processItem(response.body);
        response.body = processedResponse;

        return response;
      });
  }
}

export default OrdersAPI;
