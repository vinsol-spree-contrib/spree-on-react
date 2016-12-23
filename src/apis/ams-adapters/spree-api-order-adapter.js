const SpreeAPIOrderAdapter = {
  processList: (orderListAMS) => {
    orderListAMS.orders.forEach((order) => {
      SpreeAPIOrderAdapter._process(order, orderListAMS);
    });

    return orderListAMS;
  },

  processItem: (orderListAMS) => {
    SpreeAPIOrderAdapter._process(orderListAMS.order, orderListAMS);

    return orderListAMS.order;
  },

  /*
    PRIVATE METHODS
  */
  _process: (order, orderListAMS) => {
    order.bill_address = SpreeAPIOrderAdapter._buildAddress(order.bill_address_id, orderListAMS);
    order.ship_address = SpreeAPIOrderAdapter._buildAddress(order.ship_address_id, orderListAMS);
    order.line_items = SpreeAPIOrderAdapter._buildLineItems(order.line_item_ids, orderListAMS);
    order.shipments = SpreeAPIOrderAdapter._buildShipments(order.shipment_ids, orderListAMS);
    order.payments = SpreeAPIOrderAdapter._buildPayments(order.payment_ids, orderListAMS);
    order.countries = orderListAMS.countries;
    order.states = orderListAMS.states;
    order.payment_methods = orderListAMS.payment_methods;
  },

  _getItem: (itemId, itemCollection) => {
    return itemCollection.find((item) => {
      return item.id === itemId;
    });
  },

  _buildAddress: (addressId, orderListAMS) => {
    let address = SpreeAPIOrderAdapter._getItem(addressId, orderListAMS.addresses);
    if (address) {
      address.country = SpreeAPIOrderAdapter._getItem(address.country_id, orderListAMS.countries);
      address.state = SpreeAPIOrderAdapter._getItem(address.state_id, orderListAMS.states);
    }
    return address;
  },

  _buildLineItems: (lineItemIds, orderListAMS) => {
    let lineItems = [];
    lineItemIds.forEach((lineItemId) => {
      let thisLineItem = SpreeAPIOrderAdapter._getItem(lineItemId, orderListAMS.line_items);

      if (thisLineItem) {
        thisLineItem.variant = SpreeAPIOrderAdapter._getItem(thisLineItem.variant_id, orderListAMS.variants);
        if (thisLineItem.variant) {
          thisLineItem.variant.images = SpreeAPIOrderAdapter._buildVariantImages(thisLineItem.variant.image_ids, orderListAMS);
        }

        lineItems.push(thisLineItem);
      }
    });

    return lineItems;
  },

  _buildVariantImages: (imageIds, orderListAMS) => {
    let images = [];
    imageIds.forEach((imageId) => {
      let thisImage = SpreeAPIOrderAdapter._getItem(imageId, orderListAMS.images);
      images.push(thisImage);
    });

    return images;
  },

  _buildShipments: (shipmentIds, orderListAMS) => {
    let shipments = [];
    shipmentIds.forEach((shipmentId) => {
      let thisShipment = SpreeAPIOrderAdapter._getItem(shipmentId, orderListAMS.shipments);
      thisShipment.selected_shipping_rate = SpreeAPIOrderAdapter._getItem(thisShipment.selected_shipping_rate_id, orderListAMS.shipping_rates);
      thisShipment.shipping_rates = SpreeAPIOrderAdapter._buildShippingRates(thisShipment.shipping_rate_ids, orderListAMS);
      thisShipment.manifest = SpreeAPIOrderAdapter._buildShipmentManifest(thisShipment.line_item_ids, orderListAMS);
      shipments.push(thisShipment);
    });

    return shipments;
  },

  _buildPayments: (paymentIds, orderListAMS) => {
    let payments = [];
    paymentIds.forEach((paymentId) => {
      payments.push (SpreeAPIOrderAdapter._getItem(paymentId, orderListAMS.payments));
    });

    return payments;
  },

  _buildShippingRates: (shippingRateIds, orderListAMS) => {
    let shippingRates = [];
    shippingRateIds.forEach((shippingRateId) => {
      let thisShippingRate = SpreeAPIOrderAdapter._getItem(shippingRateId, orderListAMS.shipping_rates);
      shippingRates.push(thisShippingRate);
    });

    return shippingRates;
  },

  _buildShipmentManifest: (lineItemIds, orderListAMS) => {
    let manifest = [];
    lineItemIds.forEach((lineItemId) => {
      let thisLineItem = SpreeAPIOrderAdapter._getItem(lineItemId, orderListAMS.line_items);
      manifest.push({ variant_id: thisLineItem.variant_id, quantity: thisLineItem.quantity });
    });

    return manifest;
  }

};

export default SpreeAPIOrderAdapter;
