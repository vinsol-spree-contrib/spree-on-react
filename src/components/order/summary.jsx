// Total Cost
// Tax 1
// Tax 2
// Shipping charges
// Order Total

import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class OrderSummary extends Component {
  render() {
    let thisOrder = this.props.order;

    return (
      <div className="row">
        <div className="col-md-12">
          <Panel collapsible defaultExpanded header="Order Summary">
            <ListGroup fill>
              <ListGroupItem>
                <label>
                  Total Cost:
                </label>
                { thisOrder.display_item_total }
              </ListGroupItem>
              <ListGroupItem>Item 2</ListGroupItem>
              <ListGroupItem>&hellip;</ListGroupItem>
            </ListGroup>
            Some more panel content here.
          </Panel>
        </div>
      </div>
    );
  };

};

export default OrderSummary;
