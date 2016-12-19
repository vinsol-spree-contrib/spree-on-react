var request = require('superagent');

const UserAPI = {
  login: (params) => {
    return request
      .post(`${ process.env.REACT_APP_AMS_API_BASE }/users/token`)
      .set('Accept', 'application/json')
      .send(params);
  }
};

export default UserAPI;
