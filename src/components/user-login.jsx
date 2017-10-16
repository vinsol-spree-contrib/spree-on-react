import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormattedMessage } from 'react-intl';

import Modal from './shared/modal';
import FlashConnector from '../containers/flash-connector';

class userLogin extends Component {
  constructor(props){
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  };

  handleFormSubmit (formData) {
    this.props.submitLoginForm(formData).then((response) => {
      this.closeModal();
    },
    (error) => {});
  };

  closeModal () {
    this.props.closeModal();
    /* Reset the redux form when modal is closed */
    this.props.reset();
  };

  render() {
    const { handleSubmit, valid, submitting } = this.props;

    return (
      <Modal modalClasses="user-form-modal" showModal={ this.props.showModal } closeModal={ this.closeModal } >
        <div className="user-login-modal">
          <div className="center-block user-form-process">
            <div className="cmn-user-form">
              <h2 className="global-modal-title">
                <FormattedMessage
                  id="shared.login"
                  defaultMessage="Login"
                />
              </h2>
              <div className="global-modal-content">
                <FlashConnector />
                <form onSubmit={ handleSubmit(this.handleFormSubmit) }>
                  <div className="modal-form-row">
                    <label className="modal-form-label">
                      <FormattedMessage
                        id="shared.email"
                        defaultMessage="Email"
                      />
                    </label>
                    <div className="modal-form-input">
                      <Field className="form-input"
                          name="user[email]"
                          component="input"
                          type="text" />
                    </div>
                  </div>

                  <div className="modal-form-row">
                    <label className="modal-form-label">
                      <FormattedMessage
                        id="shared.password"
                        defaultMessage="Password"
                      />
                    </label>
                    <div className="modal-form-input">
                      <Field className="form-input"
                          name="user[password]"
                          component="input"
                          type="password" />
                    </div>
                  </div>

                  <div className="modal-form-row">
                    <div className="modal-form-input">
                      <button type="submit"
                        disabled={ !valid || submitting }
                        className="button-primary">
                        <FormattedMessage
                          id="shared.login"
                          defaultMessage="Login"
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
  };
};

userLogin = reduxForm({
  form: 'userLogin'
})(userLogin);

export default userLogin;
