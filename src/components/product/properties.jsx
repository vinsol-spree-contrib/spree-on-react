import React, { Component } from 'react';

class ProductProperties extends Component {
  render() {
    let renderString = null;

    let productProperties = this.props.properties.map((property, idx) => {
      return (
        <tr key={ "product-property-" + idx }>
          <td>
            <strong>{property.property_name}</strong>
          </td>

          <td>
            { property.value }
          </td>
        </tr>
      );
    });

    if (productProperties.length > 0) {
      renderString =  <div className="col-md-12">
                        <div className="block-title">Properties</div>
                        <table className="table table-striped table-bordered margin-bottom-none">
                          <tbody>
                            { productProperties }
                          </tbody>
                        </table>
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
