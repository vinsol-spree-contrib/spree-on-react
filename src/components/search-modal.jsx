import React, { Component } from 'react';

class searchModal extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

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
        <form onSubmit={this.submitForm}>
          <div className="container-fluid">
            <input type="text" className="form-control" onChange={this.onChange} placeholder="Search"/>
          </div>
        </form>
      </div>
    );
  }
}

export default searchModal;
