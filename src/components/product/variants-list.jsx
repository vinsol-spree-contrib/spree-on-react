import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { Dropdown, Button, MenuItem } from 'react-bootstrap';

class VariantsList extends Component {

  render() {
    let variantsList, variantMenuItems;
    const outOfStockRep = this.props.intl.formatMessage(
                            { id: 'label.outOfStock',
                              defaultMessage: "Out of stock"
                            });

    variantMenuItems =  this.props.variantsList.map((variant, idx) => {
                          return (
                            <MenuItem eventKey={ idx } key={ variant.id } onSelect={ ()=>this.props.onChangeVariant(variant) }>
                              { variant.options_text }
                              { variant.in_stock ? '' : ` (${ outOfStockRep })` }
                            </MenuItem>
                          );
                        });
    variantsList = (
      <Dropdown id="variantDropdown">
        <Button bsStyle="primary variant-button">
          { this.props.currentVariant.options_text }
        </Button>
        <Dropdown.Toggle bsStyle="primary variant-dropdown-button"/>

        <Dropdown.Menu bsStyle=" variant-options-dropdown">
          { variantMenuItems }
        </Dropdown.Menu>
      </Dropdown>
    );

    let renderString = null;
    if(this.props.variantsList.length > 0){
      renderString = <div id="product-variants">
        { variantsList }
      </div>
    }

    return (
      renderString
    );
  }
};

export default injectIntl(VariantsList);
