var request = require('superagent');
import CommonAPIMethods from './common-api-methods';

const LineItemAPI = {
  create: (params) => {
    // let tokenParam = CommonAPIMethods.getTokenParams(params);

    return request
      .post(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/line_items`)
      .query({ token: params.apiToken })
      .set('Accept', 'application/json')
      .send({
        line_item: {
          variant_id: params.variantId,
          quantity: params.quantity
        }
      });
  },

  destroy: (params) => {
    return request
      .delete(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/line_items/${params.lineItemId}`)
      .query({ token: params.apiToken })
      .set('Accept', 'application/json');
  },

  update: (params) => {
    return request
      .put(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/line_items/${params.lineItemId}`)
      .set('Accept', 'application/json')
      .send({
        line_item: {
          quantity: params.quantity
        },
        order_number: params.orderNumber,
        token: params.apiToken
      });
  }
};

export default LineItemAPI;
