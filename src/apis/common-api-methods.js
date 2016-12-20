const CommonAPIMethods = {

  /* If orderToken is present in params, set order_token in query.
      If api_token is present in params, set token.
  */
  getTokenParams: (params) => {
    let orderToken = params.order_token || params.orderToken;

    if (orderToken) {
      return { order_token: orderToken };
    }
    else if (params.api_token) {
      return { token: params.api_token };
    }
    else {
      return {};
    }
  }
};

export default CommonAPIMethods;
