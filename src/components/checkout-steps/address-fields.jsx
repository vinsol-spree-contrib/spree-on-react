import React, { Component } from 'react';
import { Field } from 'redux-form';

import CountryField from './country-field';

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
          <label htmlFor="country">Country</label>
          <Field name={ this.props.fieldNamePrefix + "[country_id]" }
                  fieldNamePrefix={ this.props.fieldNamePrefix }
                  countries={ this.props.countries }
                  component={ CountryField }
                  handleCountryChange={ this.handleCountryChange.bind(this) }
                   />
        </div>

        {
          statesRequired &&
          <div>
            <label htmlFor="state">State</label>
            <Field name={this.props.fieldNamePrefix + "[state_id]" } component="select">
              { stateOptionsMarkup }
            </Field>
          </div>
        }

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
