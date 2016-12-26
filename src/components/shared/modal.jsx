import React, { Component } from 'react';

class Modal extends Component {
  render() {
    let showModalClass = this.props.showModal ? 'show-modal' : ' ';

    return (
      <div className={ `global-modal ${ this.props.modalClasses } ${ showModalClass }` } style={{ visibility:'hidden'}}>
        <span className="btn-close" onClick={ this.props.closeModal }></span>
        <div className="container-fluid">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Modal;
