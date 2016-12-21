const Utils = {
  tokenForAPI: (userToken, orderToken) => {
    let tokenParam = {};

    if ( userToken ) {
      tokenParam = { token: userToken };
    }
    else {
      if ( orderToken ) {
        tokenParam = { order_token: orderToken };
      }
    }

    return tokenParam;
  }
}

const tokenForAPI = Utils.tokenForAPI;

export { tokenForAPI };
