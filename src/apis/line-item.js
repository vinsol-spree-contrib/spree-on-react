var request = require('superagent');
import SpreeAPILineItemAdapter from './ams-adapters/spree-api-line-item-adapter';

const LineItemAPI = {
  create: (params) => {
    return request
      .post(`${process.env.REACT_APP_AMS_API_BASE}/line_items`)
      .query(params.tokenParam)
      .set('Accept', 'application/json')
      .send({
        line_item: {
          variant_id: params.variantId,
          quantity: params.quantity
        },
        order_number: params.orderNumber
      })
      .then((response) => {
        if (JSON.parse(process.env.REACT_APP_PARSE_AMS_RESPONSE)) {
          let processedResponse = SpreeAPILineItemAdapter.processItem(response.body);
          response.body = processedResponse;
        }

        return response;
      });
  },

  destroy: (params) => {
    let queryParams = Object.assign({}, { order_number: params.orderNumber }, params.tokenParam);

    return request
      .delete(`${process.env.REACT_APP_AMS_API_BASE}/line_items/${params.lineItemId}`)
      .query(queryParams)
      .set('Accept', 'application/json');
  },

  update: (params) => {
    return request
      .put(`${process.env.REACT_APP_AMS_API_BASE}/line_items/${params.lineItemId}`)
      .set('Accept', 'application/json')
      .query(params.tokenParam)
      .send({
        line_item: {
          quantity: params.quantity
        },
        order_number: params.orderNumber
      })
      .then((response) => {
        if (JSON.parse(process.env.REACT_APP_PARSE_AMS_RESPONSE)) {
          let processedResponse = SpreeAPILineItemAdapter.processItem(response.body);
          response.body = processedResponse;
        }

        return response;
      });
  }
};

export default LineItemAPI;
