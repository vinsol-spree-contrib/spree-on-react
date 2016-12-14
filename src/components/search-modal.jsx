import React, { Component } from 'react';

class searchModal extends Component {

  render() {
    return (
      <div className={ "search-modal " + (this.props.showModal ? 'show-modal' : ' ') }>
        <span className="glyphicon glyphicon-remove btn-close" onClick={this.props.close}></span>
        <div className="container-fluid">
          <input type="text" className="form-control"/>
        </div>
      </div>
    );
  }
}

export default searchModal;
