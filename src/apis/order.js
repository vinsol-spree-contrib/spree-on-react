var request = require('superagent');

const OrdersAPI = {
  create: (params) => {
    return request
      .post(`${process.env.REACT_APP_API_BASE}/orders`)
      .send({
        order: {
          line_items: [
            {
              variant_id: params.variantId,
              quantity: params.quantity
            }
          ]
        }
      })
      .set('Accept', 'application/json')
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return {};
        }
      );
  },

  addLineItem: (params) => {
    return request
      .post(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/line_items?order_token=${params.orderToken}`)
      .send({
        line_item: {
          variant_id: params.variantId,
          quantity: params.quantity
        }
      })
      .set('Accept', 'application/json')
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return {};
        }
      );
  },

  removeLineItem: (params) => {
    return request
      .delete(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/line_items/${params.lineItemId}?order_token=${params.orderToken}`)
      .set('Accept', 'application/json')
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return {};
        }
      );
  },

  update: (params) => {
    return request
      .put(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/line_items/${params.lineItemId}?order_token=${params.orderToken}`)
      .send({
        line_item: {
          variant_id: params.variantId,
          quantity: params.quantity
        }
      })
      .set('Accept', 'application/json')
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return {};
        }
      );
  },

  destroy: (params) => {
    return request
      .put(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/empty?order_token=${params.orderToken}`)
      .set('Accept', 'application/json')
      .then(
        (response) => {
          return response;
        },
        (error) => {
          return {};
        }
      );

  }
}

export default OrdersAPI;
