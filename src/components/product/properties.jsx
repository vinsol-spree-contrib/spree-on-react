import React, { Component } from 'react';

class ProductProperties extends Component {
  render() {
    let renderString = null;

    let productProperties = this.props.properties.map((property, idx) => {
      return (
        <div className="row" key={ "product-property-" + idx }>
          <div className="col-md-3">
            <strong>{property.property_name}</strong>
          </div>

          <div className="col-md-9">
            { property.value }
          </div>
        </div>
      );
    });

    if (productProperties.length > 0) {
      renderString =  <div className="col-md-12">
                        { productProperties }
                      </div>;
    }

    return (
      <div className="product-properties row">
        {renderString}
      </div>
    );
  };
};

export default ProductProperties;
