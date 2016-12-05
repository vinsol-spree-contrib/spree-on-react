import React, { Component } from 'react';

class searchModal extends Component {

  render() {
    return (
      <div className={ "search-modal " + (this.props.showModal ? 'show-modal' : ' ') }>
        <span className="btn btn-close" onClick={this.props.close}>Close</span>
        <div className="container">
          <input type="text" className="form-control"/>
        </div>
      </div>
    );
  }
}

export default searchModal;
