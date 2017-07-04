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
      <div className="variant col-md-12">
        <Dropdown id="variantDropdown">
          <Button bsStyle="primary">
            { this.props.currentVariant.options_text }
          </Button>
          <Dropdown.Toggle bsStyle="primary"/>

          <Dropdown.Menu>
            { variantMenuItems }
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );

    let renderString = null;
    if(this.props.variantsList.length > 0){
      renderString = <div id="product-variants" className="col-md-12 text-left">
        { variantsList }
      </div>
    }

    return (
      renderString
    );
  }
};

export default injectIntl(VariantsList);
