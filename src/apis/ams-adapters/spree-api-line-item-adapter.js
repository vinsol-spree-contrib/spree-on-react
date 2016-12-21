const SpreeAPILineItemAdapter = {
  processItem: (lineItemAMS) => {
    SpreeAPILineItemAdapter._process(lineItemAMS);

    return lineItemAMS.line_item;
  },

  /*
    PRIVATE METHODS
  */
  _process: (lineItemAMS) => {
    lineItemAMS.line_item.variant = lineItemAMS.variants[0];
    if (lineItemAMS.line_item.variant) {
      lineItemAMS.line_item.variant.images = lineItemAMS.images;
    }
  }

};

export default SpreeAPILineItemAdapter;
