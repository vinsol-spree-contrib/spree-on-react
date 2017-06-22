import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Taxon from './taxon';
import styles from './styles/filter-bar.scss';

class FilterBar extends Component {
  taxonMarkup (taxon) {
    if (taxon.taxons.length > 0) {
      let thisTaxonInnerMarkup = taxon.taxons.map((innerTaxon) => {
        return (this.taxonMarkup(innerTaxon));
      });

      return (
        <NavDropdown className={ styles.mainNavHolder } id={ `dropdown-${ taxon.name }-${ taxon.id }` } title={ taxon.name } key={ `nav-dropdown-${ taxon.id }` }>
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
      <ul className={ styles.headerNavContainer }>
        { taxonFilterMarkup }
      </ul>
    );
  }
};

export default FilterBar;
