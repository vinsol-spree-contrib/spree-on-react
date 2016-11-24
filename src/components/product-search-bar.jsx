import React, { Component } from 'react';

class ProductSearchBar extends Component {

  onChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  submitForm(event) {
    event.preventDefault();
    this.props.submitForm(this.state.searchTerm);
  }

  render() {

    return (
      <form className="navbar-form navbar-right" onSubmit={this.submitForm.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control" onChange={this.onChange.bind(this)} value={this.state.searchTerm} placeholder="Search" />
        </div>
        <button type="submit" className="btn btn-success">Search</button>
      </form>
    );
  }
}

export default ProductSearchBar;
