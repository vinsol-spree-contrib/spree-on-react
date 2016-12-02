const TaxonFinder = {
  findByPermalink: (permalink, taxons = []) => {
    let matchingTaxon;

    matchingTaxon = taxons.find((taxon) => {
      return (`/t/${ taxon.permalink }` === permalink);
    });

    return matchingTaxon;
  }
}

export default TaxonFinder;
