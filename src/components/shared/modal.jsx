import React, { Component } from 'react';

class Modal extends Component {
  render() {
    let showModalClass = this.props.showModal ? 'show-modal' : ' ';

    return (
      <div className={ `global-modal ${ this.props.modalClasses } ${ showModalClass } `}>
        <span className="glyphicon glyphicon-remove-circle btn-close modal-close-button" onClick={ this.props.closeModal }></span>
        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Modal;
