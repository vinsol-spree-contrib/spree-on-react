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
        <div className="user-login-modal">
          <div className="center-block user-form-process">
            <div className="cmn-user-form">
              <h2 className="global-modal-title">SignUp</h2>

              <div className="global-modal-content">
                <FlashConnector />
                  <form onSubmit={ handleSubmit(this.handleFormSubmit) }>
                    
                    <div className="form-group row ">
                      <div className="col-sm-12">
                        <label className="col-sm-12 control-label">
                          <FormattedMessage
                            id="shared.email"
                            defaultMessage="Email"
                          />
                        </label>
                        <div className="col-sm-12">
                          <Field 
                            className="form-control" 
                            name="user[email]" 
                            type="email" 
                            component="input" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group clearfix">
                      <div className="row">
                        <div className="col-sm-6">

                          <label className="col-sm-12 control-label">
                            <FormattedMessage
                              id="shared.password"
                              defaultMessage="Password"
                            />
                          </label>
                          <div className="col-sm-12">
                            <Field 
                            className="form-control" 
                            name="user[password]" 
                            type="password" 
                            component="input" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label className="col-sm-12 control-label">
                            <FormattedMessage
                              id="shared.confirmPassword"
                              defaultMessage="Confirm Password"
                            />
                          </label>
                          <div className="col-sm-12">
                            <Field 
                            className="form-control" 
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
                        <div className="btn-group">
                          <button className="btn btn-default btn-common" onClick={ this.props.toggle }>
                            <FormattedMessage
                              id="shared.login"
                              defaultMessage="Login"
                            />
                          </button>
                          <button className="btn btn-success btn-common">
                            <FormattedMessage
                              id="shared.signUp"
                              defaultMessage="Sign Up"
                            />
                          </button>
                        </div>
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

// function validate(values) {
//   const error = [];

//   if(!values.firstname) {
//     error.firstname = "First Name is Requried";
//   }

//   if(!values.lastname) {
//     error.lastname = "Last Name is Requried";
//   }

//   if(!values.email) {
//     error.email = "Email is Required";
//   }

//   if(!values.password) {
//     error.password = "Password is Requried";
//   }
// }

userSignup = reduxForm({
  form: 'userSignup'
})(userSignup);
export default userSignup;
