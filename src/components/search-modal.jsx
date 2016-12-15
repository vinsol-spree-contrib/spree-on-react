import React, { Component } from 'react';

class searchModal extends Component {

  onChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  submitForm(event) {
    event.preventDefault();
    this.props.submitForm(this.state.searchTerm);
  }

  render() {
    return (
      <div className={ "search-modal " + (this.props.showModal ? 'show-modal' : ' ') }>
        <span className="glyphicon glyphicon-remove btn-close" onClick={this.props.close}></span>
        <form onSubmit={this.submitForm.bind(this)}>
          <div className="container-fluid">
            <input type="text" className="form-control" onChange={this.onChange.bind(this)} placeholder="Search"/>
          </div>
        </form>
      </div>
    );
  }
}

export default searchModal;
