import React, { Component } from 'react';

class SearchForm extends Component {
  constructor (props) {
    super(props);

    this.state = { searchTerm: '' };
  };

  onSearchInputChange (event) {
    this.setState ({ searchTerm: event.target.value });
  };

  submitSearchForm (event) {
    event.preventDefault();
    this.props.submitSearchForm(this.state.searchTerm);
  };

  render () {
    return (
      <dd className='icon-block'>
        <form onSubmit={ this.submitSearchForm.bind(this) }>
          <input type="text"
                  className="form-control"
                  onChange={ this.onSearchInputChange.bind(this) }
                  placeholder="Search"
                  defaultValue={ this.props.searchTerm } />
        </form>
      </dd>
    );
  };

};

export default SearchForm;
