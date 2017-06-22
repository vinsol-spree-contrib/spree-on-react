import React, { Component } from 'react';
import styles from './styles/header.scss';

class Modal extends Component {
  render() {
    let showModalClass = this.props.showModal ? 'show-modal' : ' ';

    return (
      <div className={ `global-modal ${ this.props.modalClasses } ${ showModalClass } `}>
        <span className="btn-close" onClick={ this.props.closeModal }></span>
        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Modal;
