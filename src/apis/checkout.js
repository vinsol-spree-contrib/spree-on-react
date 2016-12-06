var request = require('superagent');

const CheckoutAPI = {
  next: (orderNumber, orderToken, params={}) => {
    params.order_token = orderToken;

    return request
      .put(`${process.env.REACT_APP_API_BASE}/checkouts/${orderNumber}/next`)
      .send(params)
      .set('Accept', 'application/json')
      .then(
        (response) => {
          return response;
        }
      );
  }
}

export default CheckoutAPI;
