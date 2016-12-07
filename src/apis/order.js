var request = require('superagent');

const OrdersAPI = {
  create: (params) => {
    return request
      .post(`${process.env.REACT_APP_API_BASE}/orders`)
      .set('Accept', 'application/json')
      .send({
        order: {
          line_items: [
            {
              variant_id: params.variantId,
              quantity: params.quantity
            }
          ]
        }
      });
  },

  addLineItem: (params) => {
    return request
      .post(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/line_items`)
      .query({ order_token: params.orderToken })
      .set('Accept', 'application/json')
      .send({
        line_item: {
          variant_id: params.variantId,
          quantity: params.quantity
        }
      });
  },

  removeLineItem: (params) => {
    return request
      .delete(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/line_items/${params.lineItemId}`)
      .query({ order_token: params.orderToken })
      .set('Accept', 'application/json');
  },

  update: (params) => {
    return request
      .put(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/line_items/${params.lineItemId}`)
      .query({ order_token: params.orderToken })
      .set('Accept', 'application/json')
      .send({
        line_item: {
          quantity: params.quantity
        }
      });
  },

  destroy: (params) => {
    return request
      .put(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/empty`)
      .query({ order_token: params.orderToken })
      .set('Accept', 'application/json');
  }
}

export default OrdersAPI;
