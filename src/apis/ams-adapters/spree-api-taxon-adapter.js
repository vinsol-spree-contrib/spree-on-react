const SpreeAPITaxonAdapter = {
  processList: (taxonsListAMS) => {
    let parentTaxons = taxonsListAMS.taxons.filter((taxon) => {
      return taxon.parent_id === null;
    });

    parentTaxons.forEach((taxon) => {
      SpreeAPITaxonAdapter._process(taxon, taxonsListAMS);
    });

    taxonsListAMS.taxons.forEach((product) => {
      SpreeAPITaxonAdapter._process(product, taxonsListAMS);
    });

    return taxonsListAMS;
  },

  /*
    PRIVATE METHODS
  */
  _process: (taxon, taxonsListAMS) => {
    let childTaxons = taxonsListAMS.taxons.filter((_taxon) => {
      return _taxon.parent_id === taxon.id;
    });

    taxon.taxons = childTaxons;

    childTaxons.forEach((innerTaxon) => {
      SpreeAPITaxonAdapter._process(innerTaxon, taxonsListAMS);
    });
  }

};

export default SpreeAPITaxonAdapter;
