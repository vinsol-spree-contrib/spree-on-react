var request = require('superagent');
import CommonAPIMethods from './common-api-methods';

const LineItemAPI = {
  create: (params) => {
    let tokenParam = CommonAPIMethods.getTokenParams(params);

    return request
      .post(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/line_items`)
      .query(tokenParam)
      .set('Accept', 'application/json')
      .send({
        line_item: {
          variant_id: params.variantId,
          quantity: params.quantity
        }
      });
  },

  destroy: (params) => {
    let tokenParam = CommonAPIMethods.getTokenParams(params);

    return request
      .delete(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/line_items/${params.lineItemId}`)
      .query(tokenParam)
      .set('Accept', 'application/json');
  },

  update: (params) => {
    let tokenParam = CommonAPIMethods.getTokenParams(params);

    return request
      .put(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/line_items/${params.lineItemId}`)
      .query(tokenParam)
      .set('Accept', 'application/json')
      .send({
        line_item: {
          quantity: params.quantity
        }
      });
  }
};

export default LineItemAPI;
