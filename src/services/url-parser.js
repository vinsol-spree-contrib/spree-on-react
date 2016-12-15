const UrlParser = {

  getQueryVariable: (variable) => {
    let query = window.location.search.substring(1);
    let vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) == variable) {
          return decodeURIComponent(pair[1]);
      }
    }
    console.log('Query variable %s not found', variable);
  }
}

export default UrlParser;
