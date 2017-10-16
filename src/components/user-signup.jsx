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

  renderFormElement(field) {
    return (
        <div>
          <label className="modal-form-label">
            <FormattedMessage
              id={`shared.${field.localeId}`}
              defaultMessage={field.defaultMessage}
            />
          </label>
          <div className="modal-form-input">
            <input 
              type={field.type}
              className="form-input"
              name={field.input.name}
            />
          </div>
        </div>
      );
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
                    <div className="modal-form-row">
                        <Field 
                          name="user[email]" 
                          type="email"
                          localeId="email"
                          defaultMessage="Email"
                          component={this.renderFormElement}
                        />
                    </div>
                    <div className="modal-form-row">
                      <div className="row">
                        <div className="col-sm-6">
                          <Field
                            name="user[password]" 
                            type="password"
                            localeId="password"
                            defaultMessage="Password"
                            component={this.renderFormElement}
                          />
                        </div>
                        <div className="col-sm-6">
                          <Field
                            name="user[password_confirmation]" 
                            type="password"
                            localeId="confirmPassword"
                            defaultMessage="Confirm Password"
                            component={this.renderFormElement}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="form-group clearfix">
                        <button className="button-primary">
                          <FormattedMessage
                            id="shared.signUp"
                            defaultMessage="Sign Up"
                          />
                        </button>
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
