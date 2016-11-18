import React, { Component } from 'react';

class TaxonFilter extends Component {
  render() {
    return (
      <div className="list-group-item">
        { this.props.taxon.name }
      </div>
    );
  }
}

export default TaxonFilter;
