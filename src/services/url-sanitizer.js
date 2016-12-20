/*
  Returns the URL unchanged if it is an absolute URL
  Else, appends with REACT_APP_API_HOST.
*/
const URLSanitizer = {
  makeAbsolute: (url) => {
    if (url.indexOf('http') !== -1) {
      return url;
    }
    else {
      return `${ process.env.REACT_APP_API_HOST }${ url }`;
    }
  }
};

export default URLSanitizer;
