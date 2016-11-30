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
      .post(`${process.env.REACT_APP_API_BASE}/orders/${params.orderNumber}/line_items`)
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

  update: (params) => {

  },

  destroy: (params) => {

  }
}

export default OrdersAPI;
