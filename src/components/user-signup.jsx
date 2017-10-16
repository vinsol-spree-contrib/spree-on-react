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
    console.log("submitting");
    this.props.submitSignupForm(formData).then((response) => {
      this.closeModal();
    });
  }

  renderField(field) {
    console.log(field);
    return (
        <div>
        <input 
          {...field.input}
          className={`form-input ${ field.meta.touched && field.meta.error ? 'error' : ''}`}
          type={field.type}
          name={field.input.name}
        />
        <span className="text-danger">
          <small>{field.meta.touched && field.meta.error}</small>
        </span>
        <br />
        </div>
      );
  }

  render() {
    const { handleSubmit, valid, submitting } = this.props;
    return (
      <Modal modalClasses="user-form-modal" showModal={ this.props.showModal } closeModal={ this.closeModal } >
        <div className="user-signup-modal">
          <div className="center-block user-form-process">
            <div className="cmn-user-form">
              <h2 className="global-modal-title">
                <FormattedMessage 
                  id="shared.signUp"
                  defaultMessage="SignUp"
                />
              </h2>

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
                            name="user_email" 
                            type="email" 
                            component={this.renderField} />
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
                            name="user_password" 
                            type="password" 
                            component={this.renderField} />
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
                            name="user_confirm_password" 
                            type="password" 
                            component={this.renderField} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="form-group clearfix">
                        <button 
                          className="button-primary"
                          disabled={ !valid || submitting }>
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

function validate(values) {
  const errors = [];

  if(!values.user_email)
    errors.user_email = 'Email is Required';

  if(!values.user_password)
    errors.user_password = 'Password is Required';

  if(!values.user_confirm_password)
    errors.user_confirm_password = 'Password is Required';

  return errors;
}

userSignup = reduxForm({
  form: 'userSignup',
  validate: validate
})(userSignup);
export default userSignup;
