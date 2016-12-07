import React, { Component } from 'react';

class CountryField extends Component{

  handleCountryChange(event) {
    this.props.handleCountryChange(event.currentTarget.value);
    // Trigger the redux-form onChange callback.
    this.props.input.onChange();
  };

  render() {
    let countryOptionsMarkup = this.props.countries.map((country, idx) => {
      return (
        <option key={ idx } value={ country.id } >
          { country.name }
        </option>
      );
    });

    return (
      <select name={ this.props.fieldNamePrefix + "[country_id]" }
              onChange={ this.handleCountryChange.bind(this) }>
        { countryOptionsMarkup }
      </select>
    );
  };
};

export default CountryField;
