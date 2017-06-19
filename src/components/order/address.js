import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Address extends Component {
  render() {
    let {address} = this.props;
    return (
      <div className="address-view">
        <p>
          { address.full_name }
        </p>

        <p>
          { address.address1 }
        </p>

        <p>
          { address.address2 }
        </p>
        
        <p>
          { `${ address.state.name }, ${ address.city } - ${ address.zipcode }` }
        </p>

        <p>
          { address.country.name }
        </p>

        <p>
          <label>
            <FormattedMessage
              id="label.phone"
              defaultMessage="Phone"
            />
            : &nbsp;</label>
          { address.phone }
        </p>
      </div>
    );
  };
};

export default Address;
