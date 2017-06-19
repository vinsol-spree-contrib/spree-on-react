import React, { Component } from 'react';
import { Field } from 'redux-form';
import { injectIntl } from 'react-intl';

import FormField from '../shared/form-field';

class CardFields extends Component{

  render() {
    return (
      <div className="">
        <Field className="form-control"
                name="order[payments_attributes][0][source_attributes][name]"
                component={ FormField.inputFieldMarkup }
                label={ this.props.intl.formatMessage({ id: 'field.paymentForm.nameOnCard', defaultMessage: "Name on card" }) }
                type="text" />

        <Field className="form-control"
                name="order[payments_attributes][0][source_attributes][number]"
                component={ FormField.inputFieldMarkup }
                label={ this.props.intl.formatMessage({ id: 'field.paymentForm.cardNumber', defaultMessage: "Card Number" }) }
                type="text" />

        <Field className="form-control"
                name="order[payments_attributes][0][source_attributes][expiry]"
                component={ FormField.inputFieldMarkup }
                label={ this.props.intl.formatMessage({ id: 'field.paymentForm.cardExpiry', defaultMessage: "Card Expiry" }) }
                type="text" />

        <Field className="form-control"
                name="order[payments_attributes][0][source_attributes][verification_value]"
                component={ FormField.inputFieldMarkup }
                label={ this.props.intl.formatMessage({ id: 'field.paymentForm.verificationValue', defaultMessage: "Verification Value" }) }
                type="text" />
      </div>
    );
  };
};

export default injectIntl(CardFields);
