var request = require('superagent');

const CheckoutAPI = {
  next: (orderNumber, orderToken, params={}) => {
    params.order_token = orderToken;

    return request
      .put(`${process.env.REACT_APP_API_BASE}/checkouts/${orderNumber}/next`)
      .set('Accept', 'application/json')
      .send(params);
  }
}

export default CheckoutAPI;
