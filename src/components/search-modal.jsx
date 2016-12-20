import React, { Component } from 'react';

class searchModal extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
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
      <dd className='icon-block'>
        <form onSubmit={this.submitForm}>
          <input type="text" className="form-control" onChange={this.onChange} placeholder="Search" defaultValue={this.props.searchTerm}/>
        </form>
      </dd>
    );
  }
}

export default searchModal;
