import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Modal from './shared/modal';
import FlashConnector from '../containers/flash-connector';

class userSignup extends Component {

  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }
  
  closeModal() {
    this.props.closeModal();
  }

  render() {
    return (
      <Modal modalClasses="user-form-modal" showModal={ this.props.showModal } closeModal={ this.closeModal } >
        <div className="user-login-modal">
          <div className="center-block user-form-process">
            <div className="cmn-user-form">
              <h2 className="global-modal-title">SignUp</h2>

              <div className="global-modal-content">
                <FlashConnector />
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
                  </div>
                </div>
              </div>
            </div>
         </Modal>
    );
  }
}

export default userSignup;
