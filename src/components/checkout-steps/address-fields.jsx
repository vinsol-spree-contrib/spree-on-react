import React, { Component } from 'react';
import { Field } from 'redux-form';

class AddressFields extends Component {

  render() {
    return (
      <div>
        <div>
          <label htmlFor="firstname">First Name</label>
          <Field name={this.props.fieldNamePrefix + "[firstname]" } component="input" type="text" />
        </div>

        <div>
          <label htmlFor="lastname">Last Name</label>
          <Field name={this.props.fieldNamePrefix + "[lastname]" } component="input" type="text" />
        </div>

        <div>
          <label htmlFor="address1">Address Line 1</label>
          <Field name={this.props.fieldNamePrefix + "[address1]" } component="input" type="text" />
        </div>

        <div>
          <label htmlFor="address2">Address Line 2</label>
          <Field name={this.props.fieldNamePrefix + "[address2]" } component="input" type="text" />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <Field name={this.props.fieldNamePrefix + "[city]" } component="input" type="text" />
        </div>

        <div>
          <label htmlFor="zipcode">Zip Code</label>
          <Field name={this.props.fieldNamePrefix + "[zipcode]" } component="input" type="text" />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <Field name={this.props.fieldNamePrefix + "[phone]" } component="input" type="text" />
        </div>
      </div>
    );
  };
};

export default AddressFields;
