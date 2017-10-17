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
  		.post(`${ process.env.REACT_APP_API_BASE }/users`)
  		.set('X-Spree-Token', process.env.REACT_APP_SPREE_API )
  		.set('Content-Type', 'application/json')
      .send(params);
  }
};


export default UserAPI;
