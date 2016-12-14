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
        { this.props.children }
        <div className="form-group">
          <label htmlFor="firstname" className="col-sm-2 control-label">First Name</label>
          <div className="col-sm-10">
            <Field className="form-control" name={this.props.fieldNamePrefix + "[firstname]" } component="input" type="text" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="lastname" className="col-sm-2 control-label">Last Name</label>
          <div className="col-sm-10">
            <Field className="form-control" name={this.props.fieldNamePrefix + "[lastname]" } component="input" type="text" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address1" className="col-sm-2 control-label">Address Line 1</label>
          <div className="col-sm-10">
            <Field className="form-control" name={this.props.fieldNamePrefix + "[address1]" } component="input" type="text" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address2" className="col-sm-2 control-label">Address Line 2</label>
          <div className="col-sm-10">
            <Field className="form-control" name={this.props.fieldNamePrefix + "[address2]" } component="input" type="text" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="city" className="col-sm-2 control-label">City</label>
          <div className="col-sm-10">
            <Field className="form-control" name={this.props.fieldNamePrefix + "[city]" } component="input" type="text" />
          </div>
        </div>

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

        <div className="form-group">
          <label htmlFor="zipcode" className="col-sm-2 control-label">Zip Code</label>
          <div className="col-sm-10">
            <Field className="form-control" name={this.props.fieldNamePrefix + "[zipcode]" } component="input" type="text" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="col-sm-2 control-label">Phone</label>
          <div className="col-sm-10">
            <Field className="form-control" name={this.props.fieldNamePrefix + "[phone]" } component="input" type="text" />
          </div>
        </div>
      </div>
    );
  };
};

export default AddressFields;
