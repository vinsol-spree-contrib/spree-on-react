var request = require('superagent');
import SpreeAPIOrderAdapter from './ams-adapters/spree-api-order-adapter';

const OrdersAPI = {
  getItem: (params) => {
    return request
      .get(`${process.env.REACT_APP_AMS_API_BASE}/orders/${ params.orderNumber }`)
      .query({ token: params.apiToken })
      .set('Accept', 'application/json')
      .send()
      .then((response) => {
        if (JSON.parse(process.env.REACT_APP_PARSE_AMS_RESPONSE)) {
          let processedResponse = SpreeAPIOrderAdapter.processItem(response.body);
          response.body = processedResponse;
        }

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
        if (JSON.parse(process.env.REACT_APP_PARSE_AMS_RESPONSE)) {
          let processedResponse = SpreeAPIOrderAdapter.processList(response.body);
          response.body = processedResponse;
        }

        return response;
      });
  },

  create: (apiToken) => {
    return request
      .post(`${process.env.REACT_APP_AMS_API_BASE}/orders`)
      .query({ token: apiToken })
      .set('Accept', 'application/json')
      .send()
      .then((response) => {
        if (JSON.parse(process.env.REACT_APP_PARSE_AMS_RESPONSE)) {
          let processedResponse = SpreeAPIOrderAdapter.processItem(response.body);
          response.body = processedResponse;
        }

        return response;
      });
  },

  destroy: (params) => {
    return request
      .put(`${process.env.REACT_APP_AMS_API_BASE}/orders/${params.orderNumber}/empty`)
      .query({ token: params.apiToken })
      .set('Accept', 'application/json');
  },

  update: (orderNumber, apiToken, params = {}) => {
    return request
      .put(`${process.env.REACT_APP_AMS_API_BASE}/orders/${orderNumber}`)
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

export default OrdersAPI;
