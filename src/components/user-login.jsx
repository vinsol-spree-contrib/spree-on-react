import React, { Component } from 'react';

class userLogin extends Component {

  render() {
    return (
      <form>
        <div className="form-group row no-margin">
          <label className="col-sm-12 control-label">
            Email
          </label>
          <div className="col-sm-12">
            <input type="text" htmlFor="" className="form-control" />
          </div>
        </div>

        <div className="form-group clearfix">
          <label className="col-sm-12 control-label">
            Password
          </label>
          <div className="col-sm-12">
            <input type="text" htmlFor="" className="form-control" />
          </div>
        </div>

        <div className="form-group clearfix">
          <div className="col-sm-12 text-center">
            <a className="btn btn-success btn-lg btn-common">Login</a>
            <a className="btn btn-default btn-lg btn-common" onClick={this.props.toggle}>Signup</a>
          </div>
        </div>
      </form>
    );
  }
}

export default userLogin;
