import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class userSignup extends Component {

  render() {
    return (
      <form>
        <div className="form-group row no-margin">
          <label className="col-sm-12 control-label">
            <FormattedMessage
              id="shared.email"
              defaultMessage="Email"
            />
          </label>
          <div className="col-sm-12">
            <input type="text" htmlFor="" className="form-control" />
          </div>
        </div>

        <div className="form-group clearfix">
          <label className="col-sm-12 control-label">
            <FormattedMessage
              id="shared.password"
              defaultMessage="Password"
            />
          </label>
          <div className="col-sm-12">
            <input type="text" htmlFor="" className="form-control" />
          </div>
        </div>

        <div className="form-group clearfix">
          <label className="col-sm-12 control-label">
            <FormattedMessage
              id="shared.confirmPassword"
              defaultMessage="Confirm Password"
            />
          </label>
          <div className="col-sm-12">
            <input type="text" htmlFor="" className="form-control" />
          </div>
        </div>

        <div className="form-group clearfix">
          <div className="col-sm-12 text-center">
            <a className="btn btn-default btn-lg btn-common" onClick={ this.props.toggle }>
              <FormattedMessage
                id="shared.login"
                defaultMessage="Login"
              />
            </a>
            <a className="btn btn-success btn-lg btn-common">
              <FormattedMessage
                id="shared.signUp"
                defaultMessage="Sign Up"
              />
            </a>
          </div>
        </div>
      </form>
    );
  }
}

export default userSignup;
