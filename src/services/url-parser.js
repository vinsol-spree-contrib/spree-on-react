const UrlParser = {

  getQueryVariable: (variable) => {
    let query = window.location.pathname;
    let vars = query.split('/search/');
    return vars[1];
    // TODO: Trying out url params as opposed to query params for search words.
    // for (let i = 0; i < vars.length; i++) {
    //   let pair = vars[i].split('=');
    //   if (decodeURIComponent(pair[0]) === variable) {
    //       return decodeURIComponent(pair[1]);
    //   }
    // }
  }
}

export default UrlParser;
