import React, { Component } from 'react';

class SearchForm extends Component {
  constructor (props) {
    super(props);
    this.submitSearchForm = this.submitSearchForm.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this)
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
      <dd className='icon-block withbg'>
        <label className="elem link-icon-elem pointer" htmlFor="search-input-box"></label>
        <span className='glyphicon glyphicon-search'></span>
        <form onSubmit={ this.submitSearchForm } className="search-inline-form">
          <input type="text"
                  className="form-control"
                  onChange={ this.onSearchInputChange }
                  placeholder="Search"
                  defaultValue={ this.props.searchTerm } id="search-input-box"/>
        </form>
      </dd>
    );
  };

};

export default SearchForm;
