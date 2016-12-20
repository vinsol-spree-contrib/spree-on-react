import React, { Component } from 'react';
import SearchModalConnector  from './../containers/search-modal-connector';

class searchBlock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  open() {
    this.setState({showModal: true});
  };

  close() {
    this.setState({showModal: false});
  };

  render() {
    return (
      <SearchModalConnector showModal={this.state.showModal} close={this.close}/>
    );
  }
}

export default searchBlock;
