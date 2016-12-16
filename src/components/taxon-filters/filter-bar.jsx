import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Taxon from './taxon';

class FilterBar extends Component {
  taxonMarkup (taxon) {
    let childTaxons = this.props.taxons.filter((childTaxon) => {
      return childTaxon.parent_id == taxon.id;
    });

    if (childTaxons.length > 0) {
      let thisTaxonInnerMarkup = childTaxons.map((innerTaxon) => {
        return (this.taxonMarkup(innerTaxon));
      });

      return (
        <NavDropdown id={ `dropdown-${ taxon.name }-${ taxon.id }` } title={ taxon.name } key={ `nav-dropdown-${ taxon.id }` }>
          { thisTaxonInnerMarkup }
        </NavDropdown>
      );
    }
    else {
      return (
        <Taxon taxon={taxon} key={ `taxon-${ taxon.id }` } handleTaxonClick={ this.props.handleTaxonClick } />
      );
    }
  };

  render() {
    let parentTaxons = this.props.taxons.filter((taxon) => {
      return taxon.parent_id == null;
    });

    const taxonFilterMarkup = parentTaxons.map((parentTaxon) => {
      return this.taxonMarkup(parentTaxon);
    });

    return (
      <ul className="nav navbar-nav">
        { taxonFilterMarkup }
      </ul>
    );
  }
};

export default FilterBar;
