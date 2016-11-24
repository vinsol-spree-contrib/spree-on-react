import React, { Component } from 'react';

class ProductSearchBar extends Component {

  onChange(event) {
    this.setState({queryTerm: event.target.value});
  }

  submitForm(event) {
    event.preventDefault();
    this.props.submitForm(this.state.queryTerm);
  }

  render() {

    return (
      <form className="navbar-form navbar-right" onSubmit={this.submitForm.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control" onChange={this.onChange.bind(this)} placeholder="Search" />
        </div>
        <button type="submit" className="btn btn-success">Search</button>
      </form>
    );
  }
}

export default ProductSearchBar;
