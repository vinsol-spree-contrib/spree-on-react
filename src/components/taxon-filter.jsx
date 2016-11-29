import React, { Component } from 'react';

class TaxonFilter extends Component {
  render() {
    return (
      <div className="list-group-item" onClick={() => this.props.onClickTaxon(this.props.taxon.id, this.props.taxon.permalink)}>
        { this.props.taxon.name }
      </div>
    );
  }
}

export default TaxonFilter;
