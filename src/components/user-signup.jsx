import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { reduxForm, Field } from 'redux-form';

import Modal from './shared/modal';
import FlashConnector from '../containers/flash-connector';

class userSignup extends Component {

  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  closeModal() {
    this.props.closeModal();
  }

  handleFormSubmit(formData) {
    this.props.submitSignupForm(formData).then((response) => {
      this.closeModal();
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Modal modalClasses="user-form-modal" showModal={ this.props.showModal } closeModal={ this.closeModal } >
        <div className="user-signup-modal">
          <div className="center-block user-form-process">
            <div className="cmn-user-form">
              <h2 className="global-modal-title">SignUp</h2>

              <div className="global-modal-content">
                <FlashConnector />
                  <form onSubmit={ handleSubmit(this.handleFormSubmit) }>
                    
                    <div className="form-group row ">
                      <div className="col-sm-12">
                        <label className="modal-form-label">
                          <FormattedMessage
                            id="shared.email"
                            defaultMessage="Email"
                          />
                        </label>
                        <div className="modal-form-input">
                          <Field 
                            className="form-input" 
                            name="user[email]" 
                            type="email" 
                            component="input" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group clearfix">
                      <div className="row">
                        <div className="col-sm-6">

                          <label className="modal-form-label">
                            <FormattedMessage
                              id="shared.password"
                              defaultMessage="Password"
                            />
                          </label>
                          <div className="modal-form-input">
                            <Field 
                            className="form-input" 
                            name="user[password]" 
                            type="password" 
                            component="input" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label className="modal-form-label">
                            <FormattedMessage
                              id="shared.confirmPassword"
                              defaultMessage="Confirm Password"
                            />
                          </label>
                          <div className="modal-form-input">
                            <Field 
                            className="form-input" 
                            name="user[password_confirmation]" 
                            type="password" 
                            component="input" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="form-group clearfix">
                      <div className="col-sm-12 text-center">
                          <button className="button-primary">
                            <FormattedMessage
                              id="shared.signUp"
                              defaultMessage="Sign Up"
                            />
                          </button>
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

userSignup = reduxForm({
  form: 'userSignup'
})(userSignup);
export default userSignup;
