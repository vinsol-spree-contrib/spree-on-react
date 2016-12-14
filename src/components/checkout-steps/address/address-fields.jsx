import React, { Component } from 'react';
import { Field } from 'redux-form';

import CountryField from './country-field';
import FormField from '../shared/form-field';

class AddressFields extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stateList: {
        states: [],
        states_required: true
      }
    };
  };

  handleCountryChange (countryId) {
    this.props.fetchStatesForCountry(countryId).then((response) => {
      this.setState({
        stateList: response
      });
    });

  };

  render() {
    let statesRequired = this.state.stateList.states_required;
    let stateOptionsMarkup;

    if (statesRequired) {
      stateOptionsMarkup = this.state.stateList.states.map((state, idx) => {
        return (
          <option key={ idx } value={ state.id } >
            { state.name }
          </option>
        );
      });
    }

    return (
      <div>
        { this.props.children }
        <Field className="form-control"
                name={this.props.fieldNamePrefix + "[firstname]" }
                component={FormField.inputFieldMarkup}
                label="First Name"
                type="text" />

        <Field className="form-control"
                name={this.props.fieldNamePrefix + "[lastname]" }
                component={FormField.inputFieldMarkup}
                label="Last Name"
                type="text" />

        <Field className="form-control"
                name={this.props.fieldNamePrefix + "[address1]" }
                component={FormField.inputFieldMarkup}
                label="Address Line 1"
                type="text" />

        <Field className="form-control"
                name={this.props.fieldNamePrefix + "[address2]" }
                component={FormField.inputFieldMarkup}
                label="Address Line 2"
                type="text" />

        <Field className="form-control"
                name={this.props.fieldNamePrefix + "[city]" }
                component={FormField.inputFieldMarkup}
                label="City"
                type="text" />

        <div className="form-group">
          <label htmlFor="country" className="col-sm-2 control-label">Country</label>
          <div className="col-sm-10">
            <Field name={ this.props.fieldNamePrefix + "[country_id]" }
                  fieldNamePrefix={ this.props.fieldNamePrefix }
                  countries={ this.props.countries }
                  component={ CountryField }
                  handleCountryChange={ this.handleCountryChange.bind(this) }/>
          </div>
        </div>

        {
          statesRequired &&
          <div className="form-group">
            <label htmlFor="state" className="col-sm-2 control-label">State</label>
            <div className="col-sm-10">
              <Field className="form-control" name={this.props.fieldNamePrefix + "[state_id]" } component="select">
                { stateOptionsMarkup }
              </Field>
            </div>
          </div>
        }

        <Field className="form-control"
                name={this.props.fieldNamePrefix + "[zipcode]" }
                component={FormField.inputFieldMarkup}
                label="Zipcode"
                type="text" />

        <Field className="form-control"
                name={this.props.fieldNamePrefix + "[phone]" }
                component={FormField.inputFieldMarkup}
                label="Phone"
                type="text" />

      </div>
    );
  };
};

export default AddressFields;
