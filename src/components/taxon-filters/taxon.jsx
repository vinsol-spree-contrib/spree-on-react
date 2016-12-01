import React, { Component } from 'react';
import { MenuItem } from 'react-bootstrap';

class Taxon extends Component {

  handleTaxonClick (taxon) {
    this.props.handleTaxonClick(this.props.taxon.id, this.props.taxon.permalink);
  };

  render() {
    return (
      <MenuItem onClick={ this.handleTaxonClick.bind(this) }>
        { this.props.taxon.name }
      </MenuItem>
    )
  }
}

export default Taxon;
