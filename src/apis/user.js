var request = require('superagent');

const UserAPI = {
  login: (params) => {
    return request
      .post(`${ process.env.REACT_APP_AMS_API_BASE }/users/token`)
      .set('Accept', 'application/json')
      .send(params);
  },
  signup: (params) => {
  	return request
  		.post('http://spree-ams.herokuapp.com/api/v1/users')
  		.set('X-Spree-Token', '1ddda9dd1d09ec7ac747386b51cfa2a46266f735cf292d89')
  		.set('Content-Type', 'application/x-www-form-urlencoded')
      .send(params);
  }
};


export default UserAPI;
